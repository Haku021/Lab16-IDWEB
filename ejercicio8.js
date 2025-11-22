      const productos = [
            { nombre: "Laptop", precio: 3500 },
            { nombre: "Mouse", precio: 80 },
            { nombre: "Teclado", precio: 150 },
            { nombre: "Monitor", precio: 450 },
            { nombre: "Auriculares", precio: 120 },
            { nombre: "Webcam", precio: 90 }
        ];
        const container = document.getElementById('tablaContainer');
        const generarTabla = () => {
            const tabla = document.createElement('table');
            tabla.innerHTML = `
                <thead><tr><th>#</th><th>Producto</th><th>Precio</th></tr></thead>
                <tbody>
                    ${productos.map((p, i) => `
                        <tr>
                            <td class="index">${i + 1}</td>
                            <td>${p.nombre}</td>
                            <td class="precio">${p.precio.toLocaleString()}</td>
                        </tr>
                    `).join('')}
                </tbody>
            `;
            const total = productos.reduce((sum, p) => sum + p.precio, 0);
            const stats = `
                <div class="stats">
                    <div class="stat-item">
                        <div class="stat-label">Total Productos</div>
                        <div class="stat-value">${productos.length}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Precio Total</div>
                        <div class="stat-value">${total.toLocaleString()}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Precio Promedio</div>
                        <div class="stat-value">${Math.round(total / productos.length).toLocaleString()}</div>
                    </div>
                </div>
            `;
            container.innerHTML = '';
            container.appendChild(tabla);
            container.innerHTML += stats;
        };
        const limpiarTabla = () => {
            container.innerHTML = '<div class="empty-message">Presiona "Generar Tabla" para mostrar los productos</div>';
        };
        const agregarProducto = () => {
            const nombres = ['SSD', 'RAM', 'GPU', 'CPU', 'Impresora', 'Scanner', 'Tablet', 'Smartphone'];
            productos.push({ 
                nombre: nombres[Math.floor(Math.random() * nombres.length)], 
                precio: Math.floor(Math.random() * 1000) + 50 
            });
            if (document.querySelector('table')) generarTabla();
        };
        