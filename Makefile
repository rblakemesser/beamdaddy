deploy:
	npm run-script build
	scp -prq build/. surrey:workspace/beamdaddy/
