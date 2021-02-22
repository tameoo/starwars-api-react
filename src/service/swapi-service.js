export default class swapiService {

    _apiBase = 'https://swapi.dev/api';

    _imageBase = 'https://starwars-visualguide.com/assets/img';
  
    getResource = async (url) => {
      const result = await fetch(`${this._apiBase}${url}`);
    
      if(!result.ok){
        throw new Error("something goes wrong");
      }
  
      return await result.json();
    }
  
    getAllpeople = async () => {
      const res = await this.getResource("/people/");
      return res.results.map(this._transformPerson);
    }
   
    getPeopleById = async (id) => {
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
    }
  
    getAllplanets = async () => {
      const res = await this.getResource("/planets/");
      return res.results.map(this._transformPlanet);
    }
   
    getPlanetById = async (id) => {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(planet);
    }
  
    getAllstarships = async () => {
      const res = await this.getResource("/starships/");
      return res.results.map(this._transformStarship);
    }
   
    getStarshipById  = async (id) => {
      const starship = await this.getResource(`/starships/${id}/`);
      return this._transformStarship(starship);
    }

    getPersonImage = (id) => {
      return `${this._imageBase}/characters/${id}.jpg`;
    }

    getPlanetImage = (id) => {
      return `${this._imageBase}/planets/${id}.jpg`;
    }

    getStarshipImage = (id) => {
      return `${this._imageBase}/starships/${id}.jpg`;
    }
    
    extractId = (item) => {
      const idRegex = /\/[0-9]*\/$/;
      let id = item.match(idRegex)[0];
      return id.substring(1,id.length-1)
    }

    _transformPerson = (person) => {
      return {
        id: this.extractId(person.url),
        name: person.name,
        gender:  person.gender,
        eyeColor: person.eye_color,
        birthYear: person.birth_year
      };
    }
    
    _transformPlanet = (planet) => {
      return {
        id: this.extractId(planet.url),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
      };
    }

    _transformStarship = (starship) => {
      return {
        id: this.extractId(starship.url),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        length: starship.length,
        crew: starship.crew,
        cargoCapacity: starship.cargo_capacity
      };
    }
  }
