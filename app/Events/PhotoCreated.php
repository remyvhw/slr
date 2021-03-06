<?php

namespace App\Events;

use App\Photo;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PhotoCreated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $photo;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Photo $photo)
    {
        $this->photo = $photo;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
