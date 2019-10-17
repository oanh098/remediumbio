<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});
Route::get('/', 'pagesController@index');
Route::get('/index', 'pagesController@index');

Route::get('/our-philosophy', 'pagesController@ourPhilosophy');
Route::get('/our-research', 'pagesController@ourResearch');
Route::get('/our-commitment', 'pagesController@ourCommitment');
Route::get('/our-senior-team', 'pagesController@ourSeniorTeam');
Route::get('/overview', 'pagesController@overview');
Route::get('/cannabinoids', 'pagesController@cannabinoids');
Route::get('/tetrahydrocannabinol', 'pagesController@tetrahydrocannabinol');
Route::get('/overview2', 'pagesController@overview2');
Route::get('/immunology', 'pagesController@immunology');
Route::get('/oncology', 'pagesController@oncology');
Route::get('/neuroscience', 'pagesController@neuroscience');
Route::get('/virology', 'pagesController@virology');
Route::get('/general-medicine', 'pagesController@generalMedicine');
Route::get('/press-releases', 'pagesController@pressReleases');
Route::get('/investor-relation', 'pagesController@investorRelation');
Route::get('/contact-us', 'pagesController@contactUs');
Route::get('/pr-20181214', 'pagesController@pr20181214');
Route::get('/pr-20181203', 'pagesController@pr20181203');
Route::get('/pr-20181201', 'pagesController@pr20181201');
Route::get('/pr-20181128', 'pagesController@pr20181128');
Route::get('/pr-20181126-2', 'pagesController@pr201811262');
Route::get('/pr-20181126', 'pagesController@pr20181126');
Route::get('/pr-20181123', 'pagesController@pr20181123');
Route::get('/pr-20181122', 'pagesController@pr20181122');
Route::get('/pr-201898', 'pagesController@pr201898');
Route::get('/pr-2019107', 'pagesController@pr2019107');
Route::get('/pr-20181012', 'pagesController@pr20181012');

