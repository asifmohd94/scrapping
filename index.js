const request=require('request');
const cheerio=require('cheerio');

request('https://academic.oup.com/journals/search-results?page=1&q=data+mining&SearchSourceType=1&allJournals=1',(error,response,html)=>{
if(!error && response.statusCode==200){
const $ = cheerio.load(html);

$('.al-authors-list').each((i,el)=>{
    const title=$(el)
    .find('.author-link')
    .text()
    .replace(/\s\s+/g,'');
    console.log(title);
})

$('.al-citation-list').each((i,el)=>{
    const url=$(el)
    .find('a')
    .text()
    .replace(/\s\s+/g,'');
    console.log(url);
})

}
})