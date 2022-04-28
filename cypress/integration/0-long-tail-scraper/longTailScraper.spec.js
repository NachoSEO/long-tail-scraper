import abc from '../../fixtures/abc.js'

const queries = [];

describe('Time to get some long tail queries', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/')
  })

  it('Get suggestions', () => {

    cy.get('#L2AGLb > div').click()
    cy.wait(500)

    cy.get('input[name=q]')
      .type('* chrome extensions')

    cy.get('ul[role]')
      .then($queries => {
        queries.push(...$queries[0].innerText.split('\n'))
      })
      .wait(1000)

    abc.forEach(letter => {
      cy.get('input[name=q]')
        .type('{home}{del}' + letter)


      cy.get('ul[role]')
        .then($queries => {
          queries.push(...$queries[0].innerText.split('\n'))
        })
        .wait(500)

      abc.forEach((secondLetter, index) => {
        if (index === 0) {
          cy.get('input[name=q]')
            .type(secondLetter)

          cy.get('ul[role]')
            .then($queries => {
              queries.push(...$queries[0].innerText.split('\n'))
            })
            .wait(300)
        } else if(index !== abc.length - 1) {
          cy.get('input[name=q]')
            .type('{backspace}'+ secondLetter)

          cy.get('ul[role]')
            .then($queries => {
              queries.push(...$queries[0].innerText.split('\n'))
            })
            .wait(200)
        } else {
          cy.get('input[name=q]')
            .type('{backspace}')

          cy.get('ul[role]')
            .then($queries => {
              queries.push(...$queries[0].innerText.split('\n'))
            })
            .wait(500)
        }
      })
    })
  })

  it('Save the data', () => {
    cy.writeFile('cypress/fixtures/queries-suggested.json', JSON.stringify(queries))
  })
})