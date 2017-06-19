PWD=$(shell pwd)
opam = opam $(1) --root=$(PWD)/opam $(2)
in_opam = eval `$(call opam, config, env)`; $(1)

all: opam
	cd coq-elpi; git submodule update --init
	-$(call in_opam, make -C coq-elpi)
	echo 'COQDIR:=$(PWD)/coq-elpi/coq' >> jscoq/config.mk
	echo 'ADDONS_PATH=$(PWD)' >> jscoq/config.mk
	$(call in_opam,\
	       make -C jscoq -j2 jscoq32 && \
	       make -C jscoq -j2 jscoq64 && \
	       make -C jscoq -j2 coq-tools && \
	       make -C jscoq -j2 libs && \
	       make -C jscoq -j2 plugin-comp)
	cp -r ext/CodeMirror jscoq/ui-external/
	cp -r ext/CodeMirror-TeX-input jscoq/ui-external/

opam:
	$(call opam, init, --compiler=4.04.1+32bit -n)
	$(MAKE) opam-install-all

opam-install-all:
	$(call opam, install, ppx_tools_versioned --yes)
	$(call opam, install, ocaml-migrate-parsetree --yes)
	$(call opam, install, camlp5 --yes)
	$(call opam, install, ppx_deriving --yes)
	$(call opam, install, ppx_deriving_yojson --yes)
	$(call opam, install, ppx_import --yes)
	$(call opam, install, js_of_ocaml --yes)

opam-install:
	$(call opam, install, $(PKG)) 

clean:
	#make -C coq-elpi/coq clean
	make -C coq-elpi/elpi clean
	make -C coq-elpi/ clean
	make -C jscoq clean
	
purge:
	rm -rf opam

run:
	cd jscoq/; python3 -m http.server 8000

