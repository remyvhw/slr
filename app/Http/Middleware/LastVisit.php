<?php

namespace App\Http\Middleware;

use Cache;
use Closure;

class LastVisit
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
        $lastVisit = Cache::remember("app:http:middleware:lastvisit:last_visit", 5, function () {
            $lastVisit = session()->get("last_visit");
            session()->put("last_visit", now());
            return $lastVisit;
        });
        $request->attributes->add(['last_visit' => $lastVisit]);
        return $next($request);
    }
}
