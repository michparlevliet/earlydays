-- 1. Get all the rows in the invoice table with an invoiceId of 400 or greater, and where the billingState is listed. Sort these rows so that the invoiceId goes from highest to lowest.
SELECT * FROM invoice
  WHERE invoiceId >= 400 
  AND billingState IS NOT NULL
  ORDER BY invoiceId DESC

-- 2. Get 6 rows from the employee table. Sort the employees from oldest to youngest. Exclude the two oldest.
SELECT * FROM employee
  ORDER BY BirthDate ASC
  LIMIT 6 OFFSET 2

-- 3. Get a list of cities where the store has customers, without duplicates. Make all the city names lowercased.
SELECT DISTINCT LOWER(city) AS "Cities" FROM customer

-- 4. Get a list of all customers who have the letter 't' (either uppercase or lowercase) in either their first or last names. Include a column that lists the third letter of their last name.
SELECT firstName, lastName, SUBSTR(LastName,3,1) AS "3rd letter" FROM customer
  WHERE firstName LIKE '%t%' 
  OR lastName LIKE '%t%'

-- 5. Get all of the rows from the artist table that contain an o with an ülaut ('ö'). In the results table, replace this character with a smiley face (':)')
SELECT REPLACE(name,'ö',':)') FROM artist
  WHERE name LIKE '%ö%'

--6. Get all results from the customer table. Replace null values in the state and fax columns with an empty string.
SELECT customerId, firstName, lastName, company, address, city, COALESCE(state,NULL,' ') AS 'State', country, postalCode, phone, COALESCE(fax, NULL, ' ') AS 'Fax', email, supportRepId 
  FROM customer

-- 7. Return all album title longer than 20 characters. Only display the first twenty characters, and make all characters lowercase.
SELECT LOWER(SUBSTR(title,1,20)) AS 'first 20 characters' FROM album
  WHERE LENGTH(title) > 20

-- 8.Get all invoices from Berlin where the total is more than $5, and the invoices from Toronto where the total is more than $5. Sort from newest to oldest. Remember: if there is more than one way to write your code, you should stop and think about which way is best.
SELECT * FROM invoice
  WHERE total >5 AND (billingCity = 'Berlin' OR billingCity = 'Toronto')
  ORDER BY invoiceDate DESC