# Mello

An open-source application based on Node.js as a platform to connect people in secure and private way including complete encryption on people's messages and
private posts. According to vision of this project it's build bascially for fun and threse is no need to worry about something, personally I would never use
this project (~@keinsell, Founder of Mello)

## Usage

```
# You don't
```

Our application needs specific 3rd-party services such as MongoDB, Minio and some others, in this case we prepared `docker-compose.local.yml` which will cover
local infrastructure needs for development. Just use following command.

```
$ docker-compose -f "docker-compose.local.yml" up -d --build
```

We used Webpack as our bundle/build service, in this case process of running our application is simplified to two steps for running application. Usually,
Webpack should figure out an current environment but it was made by @keinsell so I would not trust it.

```
$ yarn install
$ yarn build
```

Additionally before setup of application take look at [Environment Variables](./ENV.md) to understand how to configure infrastructure of application, this step
isn't necessary at all for development because we handled default variables.

## Documentation

> Remember: Spending 5h on debugging always saving you 5m of reading documentation, gl fellas

We documenting whole back-end code and endpoints using an OpenAPI 3.0 specification which is hosted on Postman under
[this link](https://www.postman.com/araclx/workspace/mello/documentation/12555920-f939afc0-2802-4330-919a-8e7ff1c53004).

## Contributing

The main purpose of this repository is to continue development of server-side features of our platform, making it faster and enriched by new features.
Development of Mello happens in the open on GitHub, Linear & Quill, and we are greateful to the community for contributing bugfixes and improvements. Read below
to learn how you can take part in future development of Mello.

### [Code of Conduct](./CODE_OF_CONDUCT.md)

Araclx, Inc has adopted a Code of Conduct that we expect project participants to adhere. Please read it so that you can understand what actions will and will
not be tolerated.

### [Contributing Guide]()

Read our contributing guide to learn about our development process how to propose bugfixes and improvements to build and test your changes to Mello.

[![codecov](https://codecov.io/gh/araclx/mello/branch/main/graph/badge.svg?token=6zaNoyjwtA)](https://codecov.io/gh/araclx/mello)

## License
