.PHONY: generate-api-client
openapi.json:
	curl http://localhost:8000/main_server/api/v1/openapi.json > openapi.json

generate: openapi.json
	rm -rf src/resources/npm/api-client
	docker run --rm -v "$(shell pwd):/local" -w /local openapitools/openapi-generator-cli generate \
	    -i openapi.json \
	    -g typescript-fetch \
	    -p npmName=bmlt-root-server-client \
	    -p npmVersion=latest \
	    --git-repo-id=bmlt-root-server-typescript-client \
	    --git-user-id=bmlt-enabled \
	    -o .

clean:
	rm -f openapi.json
	rm -rf src
