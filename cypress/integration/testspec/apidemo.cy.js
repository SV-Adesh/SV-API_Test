describe('Demo API Test', () => {
    const baseURL ='https://api.trello.com';
    const apiKey='2e1c332498b291f4e955866cfdc11605';
    const apiToken='ATTA03d353f1f6efcfedeec8397ab0ab520f732b36564fb6f8efabd818261a4a5bbf33EEAE6F';
    let id;
    it('CREATE A BOARD', () => {
        cy.request({
            method:"POST",
            url:baseURL+ "/1/boards",
            qs:{
                name:"My First Board",
                key:apiKey,
                token:apiToken,
            }
        }).then(response=>{
            const res=JSON.parse(JSON.stringify(response.body));
            id=res.id;
            expect(response.status).to.eql(200);
        })
    });

    it('GETTING A BOARD', () => {
        cy.request({
            method:"GET",
            url:baseURL+ "/1/boards/"+id,
            qs:{
                name:"My Second Board",
                key:apiKey,
                token:apiToken,
            }
        }).then(response=>{
            const res=JSON.parse(JSON.stringify(response.body));
            id=res.id;
            expect(response.status).to.eql(200);
        })
    });

    it('UPDATE A BOARD', () => {
        cy.request({
            method:"PUT",
            url:baseURL+ "/1/boards/"+id,
            qs:{
                name:"My Third Board",
                key:apiKey,
                token:apiToken,
            }
        }).then(response=>{
            const res=JSON.parse(JSON.stringify(response.body));
            id=res.id;
            expect(response.status).to.eql(200);
        })
    });
    
    it('DELETE A BOARD', () => {
        cy.request({
            method:"DELETE",
            url:baseURL+ "/1/boards/"+id,
            qs:{
                name:"My Fourth Board",
                key:apiKey,
                token:apiToken,
            }
        }).then(response=>{
            const res=JSON.parse(JSON.stringify(response.body));
            id=res.id;
            expect(response.status).to.eql(200);
        })
    });
});



//describe:collection of test cases
//it:single test case
//d898e8fffb85764b490851ffabab8ce3
//ATTA835e8ba9177889e71a9dd3dadcaa5b6578b3289318797518eae577d2ef2eec3aE44B5196