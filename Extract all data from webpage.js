  /////// PARA MEDICAMENTOS


function filterAllRowsByCriteria(solicitud, estado, producto) {
  const totalPages = parseInt(document.querySelector('#total').value);
  const dataToSave = [];

  const loadPageContent = async (page) => {
    const formData = new FormData();
    formData.append('service', 'S01');
    formData.append('total', totalPages);
    formData.append('page', page);
    formData.append('page_size', 10);
    formData.append('category', '');
    formData.append('status', '');
    formData.append('dateFrom', '');
    formData.append('dateTo', '');
    formData.append('keyword', '');

    const response = await fetch('https://servicios.msp.gob.do/portal/home/documents/S01', {
      method: 'POST',
      body: formData
    });

    return response.text();
  };

  const parseAndFilterPage = (pageContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(pageContent, 'text/html');
    const rows = doc.querySelectorAll('#addManageTable tbody tr');

    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      const requestId = cells[0].textContent.trim();
      const rowEstado = cells[5].textContent.trim();
      const product = cells[2].textContent.trim();

      if (
        (solicitud === '' || requestId === solicitud) &&
        (estado === '' || rowEstado === estado) &&
        (producto === '' || product.includes(producto))
      ) {
        dataToSave.push([requestId, rowEstado, product]);
      }
    });
  };

  const saveDataToCSV = () => {
    const csvContent = dataToSave.map(row => row.join(';')).join('\n');
    const csvBlob = new Blob([csvContent], { type: 'text/csv' });
    const csvUrl = URL.createObjectURL(csvBlob);
    const link = document.createElement('a');
    link.href = csvUrl;
    link.download = 'filtered_data.csv';
    link.click();
  };

  const processPages = async () => {
    for (let page = 1; page <= totalPages; page++) {
      console.log(`Processing page ${page}...`);
      const pageContent = await loadPageContent(page);
      parseAndFilterPage(pageContent);
    }
    console.log('Data extraction completed.');
    saveDataToCSV();
  };

  processPages();
}

// Example usage:
filterAllRowsByCriteria('', '', '');  // Replace with your filter criteria




/////// PARA COSMÉTICOS 

function filterAllRowsByCriteria(solicitud, estado, producto) {
    const totalPages = parseInt(document.querySelector('#total').value);
    const dataToSave = [];
  
    const loadPageContent = async (page) => {
      const formData = new FormData();
      formData.append('service', 'S02');
      formData.append('total', totalPages);
      formData.append('page', page);
      formData.append('page_size', 10);
      formData.append('category', '');
      formData.append('status', '');
      formData.append('dateFrom', '');
      formData.append('dateTo', '');
      formData.append('keyword', '');
  
      const response = await fetch('https://servicios.msp.gob.do/portal/home/documents/S02', {
        method: 'POST',
        body: formData
      });
  
      return response.text();
    };
  
    const parseAndFilterPage = (pageContent) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(pageContent, 'text/html');
      const rows = doc.querySelectorAll('#addManageTable tbody tr');
  
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const requestId = cells[0].textContent.trim();
        const rowEstado = cells[5].textContent.trim();
        const product = cells[2].textContent.trim();
  
        if (
          (solicitud === '' || requestId === solicitud) &&
          (estado === '' || rowEstado === estado) &&
          (producto === '' || product.includes(producto))
        ) {
          dataToSave.push([requestId, rowEstado, product]);
        }
      });
    };
  
    const saveDataToCSV = () => {
      const csvContent = dataToSave.map(row => row.join(';')).join('\n');
      const csvBlob = new Blob([csvContent], { type: 'text/csv' });
      const csvUrl = URL.createObjectURL(csvBlob);
      const link = document.createElement('a');
      link.href = csvUrl;
      link.download = 'filtered_data.csv';
      link.click();
    };
  
    const processPages = async () => {
      for (let page = 1; page <= totalPages; page++) {
        console.log(`Processing page ${page}...`);
        const pageContent = await loadPageContent(page);
        parseAndFilterPage(pageContent);
      }
      console.log('Data extraction completed.');
      saveDataToCSV();
    };
  
    processPages();
  }
  
  // Example usage:
  filterAllRowsByCriteria('', '', '');  // Replace with your filter criteria







  /////// PARA PRODUCTOS SANITARIOS

  function filterAllRowsByCriteria(solicitud, estado, producto) {
    const totalPages = parseInt(document.querySelector('#total').value);
    const dataToSave = [];
  
    const loadPageContent = async (page) => {
      const formData = new FormData();
      formData.append('service', 'S03');
      formData.append('total', totalPages);
      formData.append('page', page);
      formData.append('page_size', 10);
      formData.append('category', '');
      formData.append('status', '');
      formData.append('dateFrom', '');
      formData.append('dateTo', '');
      formData.append('keyword', '');
  
      const response = await fetch('https://servicios.msp.gob.do/portal/home/documents/S03', {
        method: 'POST',
        body: formData
      });
  
      return response.text();
    };
  
    const parseAndFilterPage = (pageContent) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(pageContent, 'text/html');
      const rows = doc.querySelectorAll('#addManageTable tbody tr');
  
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const requestId = cells[0].textContent.trim();
        const rowEstado = cells[5].textContent.trim();
        const product = cells[2].textContent.trim();
  
        if (
          (solicitud === '' || requestId === solicitud) &&
          (estado === '' || rowEstado === estado) &&
          (producto === '' || product.includes(producto))
        ) {
          dataToSave.push([requestId, rowEstado, product]);
        }
      });
    };
  
    const saveDataToCSV = () => {
      const csvContent = dataToSave.map(row => row.join(';')).join('\n');
      const csvBlob = new Blob([csvContent], { type: 'text/csv' });
      const csvUrl = URL.createObjectURL(csvBlob);
      const link = document.createElement('a');
      link.href = csvUrl;
      link.download = 'filtered_data.csv';
      link.click();
    };
  
    const processPages = async () => {
      for (let page = 1; page <= totalPages; page++) {
        console.log(`Processing page ${page}...`);
        const pageContent = await loadPageContent(page);
        parseAndFilterPage(pageContent);
      }
      console.log('Data extraction completed.');
      saveDataToCSV();
    };
  
    processPages();
  }
  
  // Example usage:
  filterAllRowsByCriteria('', '', '');  // Replace with your filter criteria






  ////// PARA ALIMENTOS

  function filterAllRowsByCriteria(solicitud, estado, producto) {
    const totalPages = parseInt(document.querySelector('#total').value);
    const dataToSave = [];
  
    const loadPageContent = async (page) => {
      const formData = new FormData();
      formData.append('service', 'S04');
      formData.append('total', totalPages);
      formData.append('page', page);
      formData.append('page_size', 10);
      formData.append('category', '');
      formData.append('status', '');
      formData.append('dateFrom', '');
      formData.append('dateTo', '');
      formData.append('keyword', '');
  
      const response = await fetch('https://servicios.msp.gob.do/portal/home/documents/S04', {
        method: 'POST',
        body: formData
      });
  
      return response.text();
    };
  
    const parseAndFilterPage = (pageContent) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(pageContent, 'text/html');
      const rows = doc.querySelectorAll('#addManageTable tbody tr');
  
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const requestId = cells[0].textContent.trim();
        const rowEstado = cells[5].textContent.trim();
        const product = cells[2].textContent.trim();
  
        if (
          (solicitud === '' || requestId === solicitud) &&
          (estado === '' || rowEstado === estado) &&
          (producto === '' || product.includes(producto))
        ) {
          dataToSave.push([requestId, rowEstado, product]);
        }
      });
    };
  
    const saveDataToCSV = () => {
      const csvContent = dataToSave.map(row => row.join(';')).join('\n');
      const csvBlob = new Blob([csvContent], { type: 'text/csv' });
      const csvUrl = URL.createObjectURL(csvBlob);
      const link = document.createElement('a');
      link.href = csvUrl;
      link.download = 'filtered_data.csv';
      link.click();
    };
  
    const processPages = async () => {
      for (let page = 1; page <= totalPages; page++) {
        console.log(`Processing page ${page}...`);
        const pageContent = await loadPageContent(page);
        parseAndFilterPage(pageContent);
      }
      console.log('Data extraction completed.');
      saveDataToCSV();
    };
  
    processPages();
  }
  
  // Example usage:
  filterAllRowsByCriteria('', '', '');  // Replace with your filter criteria











  /////// PARA COSMÉTICOS CON FECHA


function filterAllRowsByCriteria(solicitud, estado, producto) {
  const totalPages = parseInt(document.querySelector('#total').value);
  const dataToSave = [];

  const loadPageContent = async (page) => {
    const formData = new FormData();
    formData.append('service', 'S02');
    formData.append('total', totalPages);
    formData.append('page', page);
    formData.append('page_size', 10);
    formData.append('category', '');
    formData.append('status', '');
    formData.append('dateFrom', '');
    formData.append('dateTo', '');
    formData.append('keyword', '');

    const response = await fetch('https://servicios.msp.gob.do/portal/home/documents/S02', {
      method: 'POST',
      body: formData
    });

    return response.text();
  };

  const parseAndFilterPage = (pageContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(pageContent, 'text/html');
    const rows = doc.querySelectorAll('#addManageTable tbody tr');

    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      const requestId = cells[0].textContent.trim();
      const rowEstado = cells[5].textContent.trim();
      const product = cells[2].textContent.trim();
      const date = cells[3].textContent.trim();

      if (
        (solicitud === '' || requestId === solicitud) &&
        (estado === '' || rowEstado === estado) &&
        (producto === '' || product.includes(producto))
      ) {
        dataToSave.push([requestId, rowEstado, product, date]);
      }
    });
  };

  const saveDataToCSV = () => {
    const csvContent = dataToSave.map(row => row.join(';')).join('\n');
    const csvBlob = new Blob([csvContent], { type: 'text/csv' });
    const csvUrl = URL.createObjectURL(csvBlob);
    const link = document.createElement('a');
    link.href = csvUrl;
    link.download = 'filtered_data.csv';
    link.click();
  };

  const processPages = async () => {
    for (let page = 1; page <= totalPages; page++) {
      console.log(`Processing page ${page}...`);
      const pageContent = await loadPageContent(page);
      parseAndFilterPage(pageContent);
    }
    console.log('Data extraction completed.');
    saveDataToCSV();
  };

  processPages();
}

// Example usage:
filterAllRowsByCriteria('', '', '');  // Replace with your filter criteria