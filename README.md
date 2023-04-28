[![wakatime](https://wakatime.com/badge/user/da8cd449-74a6-4a7b-bcbe-d6c973983c4f/project/beb31a39-7cae-47a9-bcd5-f501f4e8675a.svg)](https://wakatime.com/badge/user/da8cd449-74a6-4a7b-bcbe-d6c973983c4f/project/beb31a39-7cae-47a9-bcd5-f501f4e8675a)

# Todo app

## Alkalmazás célja
A felhasználók regisztráció után fel tudnak venni feladatokat. A feladatokat készre lehet jelölni az adott feladatra kattintva. A feladatokat lehet módosatani, a módosítás ikonra kattintva, vagy törölni a törlés ikonra kattintva.
A felhasználók csak a saját feladataikhoz férnek hozzá

## Telepítés

### Környezeti változók beállítása

A `backend` és `client` mappában található `.env.example` fájlból létre kell hozni egy-egy `.env` fájlt a backend és a client mappa gyökerébe.

#### backend/.env
```
NODE_ENV='development'
JWT_KEY='super-secret'
MONGO_URI='mongodb://mongo:27017/todo-app'
PORT=5000
```

#### client/.env
```
REACT_APP_BACKEND_API_URL="http://localhost:5000"
```

### Alkalmazás indítása

Az alkalmazás gyökérkönyvtárába ki kell adni a terminálban a `docker-compose up --build` parancsot.
A klienst ez után a böngészőben a `http://localhost:3000` útvonalon lehet elérni.

## API dokumentáció
A backend elérési útvonala a `http://localhost:5000` címen található.

| Metódus | Leírás                  | URL                | Tartalom                            | Válasz                      | Státusz kód |
|---------|-------------------------|--------------------|-------------------------------------|-----------------------------|-------------|
| POST    | Regisztráció            | /api/users/signup  | {email, password, confirm_password} | {id, email}                 | 201         |
| POST    | Bejelentkezés           | /api/users/signin  | {email, password}                   | {id, email}                 | 200         |
| POST    | Kijelentkezés           | /api/users/signout | -                                   | -                           | 200         |
| POST    | Új feladat felvétel     | /api/todos         | {title}                             | {id, title, completed}      | 201         |
| GET     | Feladatok lekérdezése   | /api/todos         | -                                   | [...{id, title, completed}] | 200         |
| GET     | Egy feladat lekérdezése | /api/todos/:id     | URL paraméterben ékezik az id       | {id, title, completed}      | 200         |
| PUT     | Egy feladat módosítésa  | /api/todos         |  {id, title, completed}             | {id, title, completed}      | 200         |
| DELETE  | Egy feladat törlése     | /api/todos/:id     | URL paraméterben érkezik az id      | {success}                   | 200         |



