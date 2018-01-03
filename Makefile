deploy:
	npm run-script build
	scp -prq build/. beam:workspace/beamdaddy/
