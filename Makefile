build-test:
	rm -rf build
	mv .env.production .env.production_back
	cp .env.test .env.production
	yarn build
	mv .env.production .env.test
	mv .env.production_back .env.production

build:
	rm -rf build
	yarn build
