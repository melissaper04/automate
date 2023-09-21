import { page } from "../../features/support/hooks";

export class Search{

    async enterSearchCriteria(keyword : string){
        await page.type("#keywords-input", keyword);

        await page
          .locator('[data-automation="classificationDropDownList"]')
          .click();
        //  const spanElement = await page.locator('span[data-automation="item-text"]:has-text("Information & Communication Technology")');
        const checkboxLink = await page.locator(
          'a[role="checkbox"]:has-text("Information & Communication Technology")'
        );
    
        await checkboxLink.click();
    
        await page.mouse.click(100, 200); // Replace with your desired coordinates.
    
        await page.getByPlaceholder("Enter suburb, city, or region").fill("All");
        await page.type('#SearchBar__Where'," Sydney NSW");
        await page.locator('#searchButton').click();
      

    }
  
   async printSearchResults(){
    const totalJobsCount=  await page.locator('[data-automation="totalJobsCount"]').innerText();
    console.log("Job count "+ totalJobsCount);

  // Locate all matching <a> elements using XPath
  const elements = await page.$$('._1wkzzau0.a1msqi7e');

// Iterate through the list of elements
for (const element of elements) {
    // Find the nested <div> elements within each element
    const nestedDivs = await element.$$('div._1wkzzau0.szurmz0.szurmz5');

    // Now you can work with the nested <div> elements
    for (const divElement of nestedDivs) {
      const innerText = await divElement.innerText();
      console.log('Inner Text:', innerText);
      // Do whatever you need with the inner text of these nested divs
    }
  }

    // // Loop through each element and print its text content in yellow
    // for (let i = 0; i < elements.length; i++) {
    //     console.log('\x1b[33m%s\x1b[0m', `Job ${i + 1}:`, await elements[i].innerText());
        
    //       // Loop through the filtered elements and retrieve their inner text
    //       for (const element of elements) {
    //         const innerText = await element.innerText();
    //         console.log('Inner Text:', innerText);
    //       }
    //   }
    
    //   if (elements.length === 0) {
    //     console.log('No elements found.');
    //   }


   }

}