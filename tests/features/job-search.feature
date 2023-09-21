Feature: Job Search portal
    Scenario: Job seatch Portal - seek.com
        Given I can successfully access the job search portal using '<URL>' using credentails '<username>' and '<password>'
        When I can carry out a job search by passing '<Keyword>' keyword
        # Then I can successfully logout
        Examples:
            | URL                        | username           | password |Keyword|
            | https://www.seek.com.au/ | mel@mailinator.com | Aa12345@ |Test Lead|