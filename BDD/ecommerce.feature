Feature: End to End ecommerce validation

     application  Regression
     @regression
 Scenario: ecommerce products delivery
 Given i open ecommerce page
 When  i added items to cart
 Then  select the country submit and verify thankyou


@smoke
 Scenario: filling the form to shop
Given i open ecommerce page
 When i fill the form
    |name    |gender |
    |yash.s  |Male   | 
Then validate the form