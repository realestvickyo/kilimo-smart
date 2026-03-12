
# Backend Implementation Guidance

## 1. Daraja STK Push Integration (PHP)
Use the `v1/mpesa/stkpush/v1/processrequest` endpoint.
Key logic:
- Initiate STK push on button click.
- Store `CheckoutRequestID` in `subscriptions` table.
- Set up a public callback URL to receive the M-PESA result.
- Update `plan_type` to 'premium' only when `ResultCode` is 0.

## 2. Africa's Talking TTS (Voice Alerts)
For premium users, trigger a call using the AT Voice API:
```php
$voice = $at->voice();
$results = $voice->call([
    'to' => '+254712345678',
    'from' => 'YOUR_AT_VOICE_NUMBER'
]);
// In your Voice Callback endpoint, return XML:
// <Response><Say voice="en-US">Habari John. Fall Armyworm detected in Narok. Spray today.</Say></Response>
```

## 3. Profile Completeness Logic
Calculated on login or profile save:
```php
$fields = ['name', 'phone', 'location', 'crops', 'farm_size'];
$filled = 0;
foreach($fields as $f) if(!empty($user[$f])) $filled++;
$score = ($filled / count($fields)) * 100;
```

## 4. Chatbot Fallback
Use a `switch-case` or `IF-ELSE` pattern matching common keywords (armyworm, fertilizer, maize price) before hitting a static knowledge base (KALRO PDF scripts).
