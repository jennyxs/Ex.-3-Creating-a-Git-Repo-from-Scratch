const quotations = [
    "QYou have to believe in yourself when no one else does.",
    "The only thing we have to fear is fear itself.",
    "Confident people have a way of carrying themselves that makes others attracted to them.”"
  ];
  
  const randomIndex = Math.floor(Math.random() * quotations.length);
  const selectedQuotation = quotations[randomIndex];
  
  console.log(`Random Quotation: ${selectedQuotation}`);
  
