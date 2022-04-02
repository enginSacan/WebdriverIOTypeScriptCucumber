Feature: Creating new account for tommy

  Background: Opening website page.
    Given I am on the login page

  Scenario Outline: As a user, I try to create account without credentials

    When I will try to login without credentials
    Then I should see error <message> for names and <dataMessage> for checkbox
    Examples:
      | message                        | dataMessage                                              |
      | Vul het veld in                | Bevestig dat je akkoord gaat met de algemene voorwaarden |

  Scenario Outline: As a user, I try to create account with credentials

      When I login with <username> and <password>
      Then I should see <title> page title 
      Examples:
        | username           | password   | title        |
        | test888@test.com   | S123456.   | MIJN ACCOUNT |

  Scenario Outline: As a user, I want to add new address to my account

      When I login with <username> and <password>
      And I will go to address page
      Then I will add my new address
      Examples:
        | username          | password   |
        | test888@test.com  | S123456.   |

  