document.addEventListener('DOMContentLoaded', () => {
            // Selecionamos todos os links do menu (header e nav)
            const links = document.querySelectorAll('header a, nav a');
            const panels = document.querySelectorAll('.panel');

            // Define o painel "home" como ativo ao carregar a página
            document.getElementById('home').classList.add('ativo');

            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    // Impede o comportamento padrão do link de tentar rolar a página
                    e.preventDefault(); 

                    // Pega o atributo href (ex: "#sobre") e remove o "#" (fica só "sobre")
                    const targetId = link.getAttribute('href').substring(1); 
                    const targetPanel = document.getElementById(targetId);

                    if (targetPanel) {
                        // 1. Remove a classe 'ativo' de todos os painéis para escondê-los
                        panels.forEach(p => p.classList.remove('ativo'));
                        
                        // 2. Adiciona a classe 'ativo' apenas no painel que queremos mostrar
                        targetPanel.classList.add('ativo');
                    }
                });
            });
        });