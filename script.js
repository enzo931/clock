    // Função para atualizar o relógio a cada segundo
    function updateClock() {
        const now = new Date();  // Cria um novo objeto Date com a data e hora atuais
        const hours = now.getHours().toString().padStart(2, '0'); // Pega as horas e garante que tenha 2 dígitos
        const minutes = now.getMinutes().toString().padStart(2, '0'); // Pega os minutos e garante que tenha 2 dígitos
        const seconds = now.getSeconds().toString().padStart(2, '0'); // Pega os segundos e garante que tenha 2 dígitos
        
        // Atualiza o display do relógio com a hora atual
        document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
        
        // Pega a data atual
        const day = now.getDate().toString().padStart(2, '0'); // Dia
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Mês (JavaScript começa do 0)
        const year = now.getFullYear(); // Ano

        // Atualiza o display da data
        document.getElementById("date").textContent = `Data: ${day}/${month}/${year}`;
    }

    // Chama a função para atualizar o relógio a cada segundo (1000ms)
    setInterval(updateClock, 1000);

    // Chama a função imediatamente ao carregar a página
    updateClock();