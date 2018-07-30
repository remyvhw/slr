<?php

namespace App\Http\Middleware;

use Closure;

class ApiGuardSwitch
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        auth()->setDefaultDriver('api');
        return $next($request);
    }
}
