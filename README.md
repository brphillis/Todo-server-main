# Todo

### INFO
This application makes use of Node, Typescript and Prisma with a database hosted on digital ocean
You will need to update the .env file to include the DATABASE_URL
Will look something like 
```
DATABASE_URL="postgresql://doadmin:<secret>:25060/defaultdb?sslmode=require"
```

## Copy .env-sample
Create a new file at the root of this project called 
```
.env
```
copy all values from .env-sample into .env
You will need to get the DATABASE_URL= from another team member

## Project setup
```
npm install
```

### Start the server
```
npm run dev
```

### Start Prisma Studio
```
npx prisma studio
```

### Migrate new db updated
```
npx prisma migrate dev
```

