PWD=$(shell pwd)
opam = opam $(1) --root=$(PWD)/opam $(2)
in_opam = eval `$(call opam, config, env)`; $(1)

all: opam
	cd jscoq; git checkout config.mk
	$(call in_opam,\
	  echo "COQDIR:=`opam config var lib`/coq/" >> jscoq/config.mk)
	$(call in_opam,\
	  echo "ADDONS_PATH=`opam config var lib`/coq/user-contrib/elpi" >> jscoq/config.mk)
	$(call in_opam,\
	       make -C jscoq -j2 jscoq32 && \
	       make -C jscoq -j2 jscoq64 && \
	       make -C jscoq -j2 coq-tools && \
	       make -C jscoq -j2 libs && \
	       make -C jscoq -j2 plugin-comp)
	cp -r ext/CodeMirror jscoq/ui-external/
	cp -r ext/CodeMirror-TeX-input jscoq/ui-external/

opam: Makefile
	$(call opam, init, --compiler=4.04.1+32bit -n)
	# temporary overlay for Coq v8.7, see PR#958 PR#951
	-$(call opam, repo, add coq-dev file:///home/gares/COQ/opam-coq-archive/core-dev/)
	$(call opam, update)
	$(call opam, install, ppx_tools_versioned ocaml-migrate-parsetree --yes)
	$(call opam, install, ppx_deriving ppx_deriving_yojson ppx_import --yes)
	$(call opam, install, js_of_ocaml js_of_ocaml-ppx lwt --yes)
	$(call opam, pin, add elpi https://github.com/LPCIC/elpi.git --yes)
	$(call opam, pin, add coq-elpi https://github.com/LPCIC/coq-elpi.git --yes)

opam-install:
	$(call opam, install, $(PKG)) 

clean:
	make -C jscoq clean
	
purge:
	rm -rf opam

run:
	cd jscoq/; python3 -m http.server 8000

