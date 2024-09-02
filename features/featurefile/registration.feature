Feature: User registrations

  Scenario Outline: Verify user registration flow for valid users
    Given user click registration link
    And user enter <firstName> , <lastName> , <phoneNumber> and <email>
    And user enter address city state postal code and country
    And user enter <userName> , <password> and confirm password
    And user click submit button for registration
    Then user registration done successfully

    Examples:
      | firstName | lastName | phoneNumber | email          | userName | password |
      | ajay      | verma    |  9876543210 | test@gmail.com | test     | test@123 |
