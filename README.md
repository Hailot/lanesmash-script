# lanesmash-script

The script is split in to two parts, a nodejs/exoress server and Vuejs Frontend
both things must be running for the script to work

## Project setup
```
npm install
```
### Setup the backends database and initial seed data
```
cd ./server && sequelize db:migrate && sequelize db:seed:all
```

### Compiles and hot-reloads for development
```
nodemon server/server.js && npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###### Contributers:
Hailot, Atypick 
