function scrollToElement(a) {
    const hedefElement = document.getElementById(`${a}`);
    if (hedefElement) {
      const elementRect = hedefElement.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middleOfElement = absoluteElementTop - window.innerHeight / 2 +250;
      window.scrollTo({
        top: middleOfElement,
        behavior: "smooth"
      });
    }
  }
  scrollToElement(a);