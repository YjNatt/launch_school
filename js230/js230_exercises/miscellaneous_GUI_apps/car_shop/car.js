document.addEventListener('DOMContentLoaded', () => {
  const cars = [
    { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
    { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
    { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
    { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
    { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
  ];

  const App = {
    cars: cars,
    selects: [...document.querySelectorAll('select')],
    optionTemplate: Handlebars.compile(document.querySelector('#option-template').innerHTML),
    carTemplate: Handlebars.compile(document.querySelector('#car-template').innerHTML),
    modelTemplate: Handlebars.compile(document.querySelector('#model-template').innerHTML),

    renderOptions() {
      this.selects.forEach(select => {
        const values = [];

        this.cars.forEach(car => {
          const value = car[select.name];

          if (!values.includes(value)) {
            select.insertAdjacentHTML('beforeend', this.optionTemplate({value}));
            values.push(value);
          }
        });
      });
    },

    renderCars(cars) {
      const main = document.querySelector('main'); 
      const html = this.carTemplate({ cars: cars});
      main.textContent = '';
      main.insertAdjacentHTML('beforeend', html);
    },

    filterCars(cars) {
      let filteredCars = cars;

      this.selects.forEach(({name, value}) => {
        if (value) {
          filteredCars = filteredCars.filter(car => String(car[name]) === value);
        }
      });

      return filteredCars;
    },

    handleFilterClick(event) {
      const main = document.querySelector('main'); 

      this.renderCars(this.filterCars(this.cars));
    },

    handleSelectChange(event) {
      if (event.target.closest('select').id === 'make') {
        const modelSelect = document.querySelector('select[id="model"]');
        const models = this.filterCars(this.cars).reduce((models, car) => {
          if (!models.includes(car.model)) {
            models.push(car.model);
          }

          return models;
        }, []);


        modelSelect.innerHTML = this.modelTemplate({ models: models});
      }
    },

    init() {
      this.renderOptions();
      this.renderCars(this.cars);
      const btn = document.querySelector('button');
      btn.addEventListener('click', this.handleFilterClick.bind(this));

      const filterSection = document.querySelector('header > section');
      filterSection.addEventListener('change', this.handleSelectChange.bind(this));
    },
  };

  App.init();
});
