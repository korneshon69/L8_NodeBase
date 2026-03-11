async function loadData(url) {
    let result = { data: [], isLoading: true, error: null };
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
        
        const data = await response.json();
        result.data = data;
        result.isLoading = false;
    } catch (err) {
        result.data = [];
        result.isLoading = false;
        result.error = err.message;
    }
    
    return result;
}

module.exports = { loadData };