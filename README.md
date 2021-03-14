# Analysis System

Binary and sequential search analysis with javascript.

## Installation

Install npm dependencies

```bash
npm i
```

## Usage

Run project on 3000 port

```bash
npm run dev

// or use Docker

docker-compose up app
```

## About project

The idea is to analyze the binary and sequential search time, the chart exposes the relationship between the N sought by the search time for each approach.

There are the following functions:

- Reset: resets the analyzed data
- Add new data: search for a random N and record the analysis on the chart
- Remove data: removes the last analysis from the chart
- Order data: order chart data by N value ASC

## Preview

[Heroku Application](https://analysis-system.herokuapp.com/) ✨

![Preview](./assets/preview.gif)

## P.S.

Don't worry about the design pattern, the project is still experimental and the focus is on analysis functionality :bowtie:

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)