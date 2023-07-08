<p align="center">
  <img src="https://github.com/KhomsiAdam/quickchat/assets/9354045/15de1d7a-eafb-4476-a304-bea05f579c5e" alt="MegaStore, ecommerce platform"></img>
</p>

Ecommerce platform built with Next.js 13, providing a complete solution for both the admin panel and the store front.

Admin panel Demo at: https://megastore-admin.vercel.app, Store front: https://megastore-client.vercel.app

Key Features:

- Admin Panel: The project includes a powerful admin panel with a user-friendly interface for managing products, categories, orders, customers, and more. It provides efficient CRUD operations and an API documentation and advanced search capabilities to simplify administrative tasks.

- Store Front: The store front is designed to deliver a seamless shopping experience to customers. It showcases products, allows customers to browse through categories, add items to their cart, and complete the checkout process smoothly with the help of [Stripe](https://stripe.com/).

[*How to use test cards](https://stripe.com/docs/testing)

- Authentication and Authorization: The project implements secure user authentication and authorization using [Clerk](https://clerk.com/), ensuring that only authorized users can access the admin panel and perform privileged operations.

- Database Integration: It integrates with MySQL on [PlanetScale](https://planetscale.com/) and [Prisma](https://www.prisma.io/) to store and retrieve product information, user data, orders, and other essential data.

- Assets hosting using [Cloudinary](https://cloudinary.com/) with [Next Cloudinary](https://next-cloudinary.spacejelly.dev/)

Getting Started:
1. Clone the repository:
```bash
git clone https://github.com/KhomsiAdam/megastore
```

2. Browse to admin panel:
```bash
cd admin
```

3. Install dependencies:
```bash
pnpm install
```

4. Configure the necessary environment variables in `.env`.

5. Start the server:
```bash
pnpm dev
```

6. Access the admin panel at [http://localhost:3000](http://localhost:3000).

7. Open new terminal, Browse to store front:
```bash
cd client
```

8. Install dependencies:
```bash
pnpm install
```

9. Configure the necessary environment variables in `.env`.

10. Start the server:
```bash
pnpm dev
```

11. Access the store front at [http://localhost:3001](http://localhost:3001).
