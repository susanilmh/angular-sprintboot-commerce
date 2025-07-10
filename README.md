# 🧰 Fullstack Angular + Spring Boot Application

This is a full-stack web application built with **Angular** (frontend) and **Spring Boot** (backend). The app demonstrates user registration, login, and a simple product listing.

---

## 📦 Tech Stack

### 🔹 Frontend (Angular)
- Angular 16+
- Angular CLI
- TypeScript
- Bootstrap / Tailwind (optional)

### 🔹 Backend (Spring Boot)
- Java 17+
- Spring Boot 3.x
- Spring Security
- Spring Data JPA
- MySQL / PostgreSQL

---

## 🗂️ Project Structure
project-root/
├── backend/ # Spring Boot project
│ ├── src/
│ └── pom.xml
├── frontend/ # Angular project
│ ├── src/
│ └── angular.json
└── README.md
API runs at:
👉 http://localhost:8080/api/products and http://localhost:4200/

📸 Screenshots

![Screenshot 2025-07-09 at 9 54 14 PM](https://github.com/user-attachments/assets/3970c221-cf12-4218-8941-c3679399e0e1)
```
{
  "_embedded" : {
    "products" : [ {
      "id" : 1,
      "sku" : "BOOK-TECH-1000",
      "name" : "Crash Course in Python",
      "description" : "Learn Python at your own pace. The author explains how the technology works in easy-to-understand language. This book includes working examples that you can apply to your own projects. Purchase the book and get started today!",
      "unitPrice" : 14.99,
      "imageUrl" : "assets/images/products/books/book-luv2code-1000.png",
      "active" : true,
      "unitsInStock" : 100,
      "dateCreated" : "2025-07-08T22:11:05.000+00:00",
      "lastUpdated" : null,
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/products/1"
        },
        "product" : {
          "href" : "http://localhost:8080/api/products/1"
        },
        "category" : {
          "href" : "http://localhost:8080/api/products/1/category"
        }
      } ]
}
