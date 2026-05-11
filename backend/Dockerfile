# Gunakan node versi 20 sesuai spesifikasi tugasmu
FROM node:20

# Buat direktori kerja di dalam container
WORKDIR /usr/src/app

# Copy package.json dan install library
COPY package*.json ./
RUN npm install

# Copy seluruh file kodingan backend kamu
COPY . .

# Jalankan aplikasi di port 8080 (standar Cloud Run)
EXPOSE 3000
CMD [ "node", "index.js" ]