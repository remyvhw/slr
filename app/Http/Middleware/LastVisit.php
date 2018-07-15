<?php

namespace App\Http\Middleware;

use Auth;
use Cache;
use Closure;
use DB;

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
        $lastVisit = Cache::remember("app:http:middleware:lastvisit:last_visit:" . session()->getId(), 5, function () {
            $lastVisit = session()->get("last_visit");
            session()->put("last_visit", now());

            if (Auth::check()) {
                $lastVisit = Auth::user()->last_visit ?? $lastVisit;
                DB::table(Auth::user()->getTable())->where('id', Auth::id())->update(['last_visit' => now()]);
            }

            return $lastVisit;
        });
        $request->attributes->add(['last_visit' => $lastVisit]);
        return $next($request);
    }
}
