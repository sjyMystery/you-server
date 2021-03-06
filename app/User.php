<?php

namespace hiahia;

use Illuminate\Support\Facades\DB;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;


use hiahia\Contact;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    static public function getByEmail($email)
    {
        return User::where("email", '=', $email)->first();
    }

    public function avatars()
    {
        return $this->hasMany('hiahia\Avatar');
    }

    public function reContacts()
    {
        return $this->belongsToMany('hiahia\User', 'contacts', 'remote_id', 'host_id')->withTimestamps();
    }

    public function getContactByEmail($email)
    {
        return $this->contacts()->where('email', '=', email)->first();
    }

    public function getHomeProfile()
    {
        return ['name' => $this->name, 'mobile' => $this->mobile, 'gender' => $this->gender, 'motto' => $this->motto, 'id' => $this->id];
    }

    public function updateProfile($name, $motto, $mobile,$gender)
    {
        if ($name != '') {
            $this->name = $name;
        }
        if ($motto != '') {
            $this->motto = $motto;
        }
        if ($mobile != '') {
            $this->mobile = $mobile;
        }
        if($gender!=''){
            $this->gender = $gender;
        }
        $this->save();
    }


    //通过邮箱检索是否存在

    public function contacts()
    {
        return $this->belongsToMany('hiahia\User', 'contacts', 'host_id', 'remote_id')->withPivot('session_id');
    }

    public function addContact(User $user)
    {

        return Contact::add($this, $user);
    }

    public function delContact(User $user)
    {
        return Contact::del($this, $user);
    }
    public function contactList()
    {
        return $this->hasMany('hiahia\Contact','host_id');
    }
    public function reContactList()
    {
        return $this->hasMany('hiahia\Contact','remote_id');
    }
    public function removeContacts()
    {
        $this->contactList()->delete();
        $this->reContactList()->delete();
    }

}
