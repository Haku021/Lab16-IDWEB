const imagenes = [
            {rl: "http://i.pinimg.com/736x/cc/c1/38/ccc1383dd6e17be9f420a5552a825294.jpg",
                titulo: "Keonho",
                descripcion: "Esplendido"
            },
            {url: "https://i.pinimg.com/736x/2e/a9/ca/2ea9caeefdd5d9aec5145d2b99999217.jpg",
                titulo: 'Yunho',
                descripcion: "raro"
            },
            {url: "https://i.pinimg.com/736x/d8/b1/73/d8b173dce032d9952943ceb220934436.jpg",
                titulo: "cortis",
                descripcion: "grupo kpop"
            },
        ];
        const imagenPrincipal = document.getElementById('imagenPrincipal');
        const imagenTitulo = document.getElementById('imagenTitulo');
        const imagenDescripcion = document.getElementById('imagenDescripcion');
        const galeriaThumbnails = document.getElementById('galeriaThumbnails');
        const cambiarImagen = (index) => {
            const img = imagenes[index];
            imagenPrincipal.src = img.url;
            imagenTitulo.textContent = img.titulo;
            imagenDescripcion.textContent = img.descripcion;
            document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
        };
        imagenes.forEach((img, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            if (index === 0) thumbnail.classList.add('active');

            thumbnail.innerHTML = `
                <img src="${img.url}" alt="${img.titulo}">
                <div class="thumbnail-overlay">${img.titulo}</div>
            `;
            thumbnail.addEventListener('click', () => cambiarImagen(index));
            galeriaThumbnails.appendChild(thumbnail);
        });
