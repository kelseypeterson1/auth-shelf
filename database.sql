
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO "item" ("description", "image_url", "user_id")
VALUES ('Orange Juice', 'https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Juice-2-of-2.jpeg', 1);

INSERT INTO "item" ("description", "image_url", "user_id")
VALUES ('Books', 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg', 1);

INSERT INTO "item" ("description", "image_url", "user_id")
VALUES ('Computer', 'https://intelliweb.effectus.cloud/os2inc/files/2020/06/AdobeStock_120497867.jpeg', 1);

INSERT INTO "item" ("description", "image_url", "user_id")
VALUES ('Hat', 'https://www.tampabay.com/resizer//_XF47TMSedTGHug-m1tE0TrHVB4=/900x506/smart/filters:format(webP)/cloudfront-us-east-1.images.arcpublishing.com/tbt/QPY6QNIYINHQFEX5BLGOPHQC4Q.jpg', 1);