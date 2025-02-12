<?php

namespace App\Application\Admin\View\Components;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\View\Component;
use Illuminate\View\View;

/**
 * Class AuthLayout
 * @package App\Application\Admin\View\Components
 */
class AuthLayout extends Component
{
    /**
     * Get the view / contents that represents the component.
     *
     * @return Application|Factory|\Illuminate\Contracts\View\View|View
     */
    public function render()
    {
        return view('layouts.auth');
    }
}
