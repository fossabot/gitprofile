all: run
run:
	npm run-script build && npm run-script preview

build:
	npm run-script build