---
outline: deep
---

# Exemplos da API

## Authentication

Toras de api fixadas so estao disponiveis apos a altenticacoa 

- login
- logout
- refresh

### Login 
::: code-group

```ts [login.ts]
    export interface Data {
        userData:     UserData;
        accessToken:  string;
        refreshToken: string;
    }

    export interface User {
        id:         number;
        fullName:   string;
        username:   string;
        avatar:     string;
        email:      string;
        role:       string;
        about:      null;
        ability:    Ability[];
        company_id: number;
        extras:     any[];
    }

    export interface Ability {
        action:  string;
        subject: string;
    }

    const url = new URL("https://api-v2.monitchat.com/api/v1/auth/login");

    let body = {
        email: "email@email.com.br",
        password: "password"
    }

    fetch(url, {
        method: "POST",
        body: body
    })
    .then(response => response.json() )
    .then(json => json as Data);
```

```php [login.php]
class Ability {
    public string $action;
    public string $subject;

    public function __construct(string $action, string $subject) {
        $this->action = $action;
        $this->subject = $subject;
    }
}

class User {
    public int $id;
    public string $fullName;
    public string $username;
    public string $avatar;
    public string $email;
    public string $role;
    public ?string $about;
    public array $ability;
    public int $company_id;
    public array $extras;

    public function __construct($data) {
        $this->id = $data['id'];
        $this->fullName = $data['fullName'];
        $this->username = $data['username'];
        $this->avatar = $data['avatar'];
        $this->email = $data['email'];
        $this->role = $data['role'];
        $this->about = $data['about'] ?? null;
        $this->ability = array_map(fn($ab) => new Ability($ab['action'], $ab['subject']), $data['ability']);
        $this->company_id = $data['company_id'];
        $this->extras = $data['extras'] ?? [];
    }
}

class Data {
    public User $userData;
    public string $accessToken;
    public string $refreshToken;

    public function __construct($data) {
        $this->userData = new User($data['userData']);
        $this->accessToken = $data['accessToken'];
        $this->refreshToken = $data['refreshToken'];
    }
}

$url = 'https://api-v2.monitchat.com/api/v1/auth/login';
$body = json_encode([
    'email' => 'email@email.com.br',
    'password' => 'password'
]);

$options = [
    'http' => [
        'header'  => "Content-type: application/json\r\n",
        'method'  => 'POST',
        'content' => $body,
    ]
];

$context  = stream_context_create($options);
$response = file_get_contents($url, false, $context);

if ($response === false) {
    die('Error fetching data');
}

$data = new Data(json_decode($response, true));

print_r($data);

```


```go [login.go]
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

type Ability struct {
    Action  string `json:"action"`
    Subject string `json:"subject"`
}

type User struct {
    ID        int       `json:"id"`
    FullName  string    `json:"fullName"`
    Username  string    `json:"username"`
    Avatar    string    `json:"avatar"`
    Email     string    `json:"email"`
    Role      string    `json:"role"`
    About     *string   `json:"about"`
    Ability   []Ability `json:"ability"`
    CompanyID int       `json:"company_id"`
    Extras    []any     `json:"extras"`
}

type Data struct {
    UserData     User   `json:"userData"`
    AccessToken  string `json:"accessToken"`
    RefreshToken string `json:"refreshToken"`
}

type Credentials struct {
    Email    string `json:"email"`
    Password string `json:"password"`
}

func main() {
    url := "https://example.com/api/login"
    body := Credentials{
        Email:    "email@email.com.br",
        Password: "password",
    }

    jsonBody, err := json.Marshal(body)
    if err != nil {
        fmt.Println("Error encoding JSON:", err)
        return
    }

    req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonBody))
    if err != nil {
        fmt.Println("Error creating request:", err)
        return
    }
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println("Error sending request:", err)
        return
    }
    defer resp.Body.Close()

    var data Data
    if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
        fmt.Println("Error decoding response:", err)
        return
    }

    fmt.Printf("Response Data: %+v\n", data)
}

```    
:::
