PWD=$(shell pwd)
OPAMROOT=$(PWD)/opam
export OPAMROOT

all: jscoq tutorials
	
tutorials: docs/tutorial-elpi_lang.html docs/tutorial-coq_elpi.html

jscoq:
	eval `opam config env` && \
	       	cd jscoq && \
		(cd coq-external/elpi && \
			git clean -dfx && \
			git pull origin master && \
			git submodule update --init elpi && \
			(cd elpi && git clean -dfx) \
		) && \
		make coq ADDONS=elpi && \
		ADDONS=elpi ./build.sh && \
		make dist BUILDDIR=../docs/
	mkdir docs/ui-external/CodeMirror/mode/coq -p
	cd jscoq && git submodule update --init ui-external/CodeMirror
	cp -r ext/CodeMirror-minified/* docs/ui-external/CodeMirror/
	cp jscoq/ui-external/CodeMirror/mode/coq/coq.js docs/ui-external/CodeMirror/mode/coq
	cp -r ext/CodeMirror-TeX-input docs/ui-external/

docs/tutorial-%.html: jscoq/coq-external/elpi/theories/tutorial/%.v Makefile jscoq
	sed 's/@TUTORIAL@/$*/' docs/_includes/header.html >  $@
	sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g; s/"/\&quot;/g; s/'"'"'/\&#39;/g' $< >> $@
	cat docs/_includes/footer.html >> $@

setup: 
	opam init -j 2 -y
	git submodule update --init
	cd jscoq && ./toolchain-setup.sh

run:
	chromium --allow-file-access-from-files \
		--js-flags="--harmony-tailcalls" \
		--js-flags="--stack-size=65536" \
		docs/tutorial-*.html

.PHONY: jscoq
