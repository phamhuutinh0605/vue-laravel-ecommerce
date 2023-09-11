<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "description" => $this->description,
            "price" => $this->price,
            "slug" => $this->slug,
            "image_url" => $this->image,
            "created_at" => (new \DateTime($this->created_at))->format("d-m-Y H:i:s"),
            "updated_at" => (new \DateTime($this->updated_at))->format("d-m-Y H:i:s"),
        ];
    }
}