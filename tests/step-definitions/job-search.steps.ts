import { Given, When, Then } from '@cucumber/cucumber';
import { Search } from '../page-objects/portal-login-logout/job-search'; // Adjust file extension if needed
const search = new Search();



When('I can carry out a job search by passing {string} keyword',async (keyword:string) => {
    await search.enterSearchCriteria(keyword);
    await search.printSearchResults();
})