# Analysis System

Experimenting Binary and Sequential search analysis with javascript.

Experimenting Bubble and Selection sort analysis with javascript.

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

The idea is to analyze the search time using the binary and sequential methods, and the sort time using the bubble and selection methods, the chart exposes the relationship between the N sought by the search/sort time for each approach.

There are the following functions when is Search Analysis:

- Reset all data: resets the analyzed data
- Add new data: search for a random N and record the analysis on the chart
- Remove last data: removes the last analysis from the chart
- Sort data: sort chart data by N value ASC

There are the following functions when is Sort Analysis:

- Reset all data: resets the analyzed data
- Add new data: sort for a inputed list by user (N) and record the analysis on the chart
- Remove last data: removes the last analysis from the chart
  
## See the algorithms

- [Binary Search](src/app/algorithms/search/binarySearch.js)
- [Sequential Search](src/app/algorithms/search/sequentialSearch.js)
- [Bubble Sort](src/app/algorithms/sort/bubbleSort.js)
- [Selection Sort](src/app/algorithms/sort/selectionSort.js)

## Preview

[Heroku Application](https://analysis-system.herokuapp.com/) ✨

## P.S.

Don't worry about the design pattern, the project is still experimental and the focus is on analysis functionality :bowtie:

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)