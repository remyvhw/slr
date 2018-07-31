<?php
/**
 * Adapted from [arubacao/latlong.php](https://gist.github.com/arubacao/b5683b1dab4e4a47ee18fd55d9efbdd1)
 */
namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Longitude implements Rule
{

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return preg_match('/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,15})?))$/', $value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The longitude is invalid.';
    }
}
