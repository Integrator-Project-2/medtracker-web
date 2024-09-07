export const downloadBase64File = (base64Data: string, filename: string) => {

    // Verifica se base64Data está definido e não é uma string vazia
    if (!base64Data) {
        console.error('Base64 data is undefined or empty.');
        return;
    }

    // Remove o prefixo do base64 se estiver presente
    const base64String = base64Data.replace(/^data:application\/pdf;base64,/, '');

    // Converte a string base64 em um blob
    const blob = new Blob([new Uint8Array(atob(base64String).split('').map(char => char.charCodeAt(0)))], {
        type: 'application/pdf',
    });

    // Cria um link de download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    // Adiciona o link ao DOM e clica nele
    document.body.appendChild(link);
    link.click();

    // Remove o link do DOM
    document.body.removeChild(link);
};