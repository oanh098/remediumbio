<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class pagesController extends Controller
{
    public function index()
    {
        $bodyClass = 'index';
        $title='Home';
        return view('index', compact(['bodyClass','title']));
    }
    public function ourPhilosophy()
    {
        $bodyClass = 'our-philosophy';
        $title='Our Philosophy';
        return view('our-philosophy', compact(['bodyClass','title']));
    }
    public function ourResearch()
    {
        $bodyClass = 'our-research';
        $title='Our Research';
        return view('our-research', compact(['bodyClass','title']));
    }
    public function ourCommitment()
    {
        $bodyClass = 'our-commitment';
        $title='Our Commitment';
        return view('our-commitment', compact(['bodyClass','title']));
    }
    public function ourSeniorTeam()
    {
        $bodyClass = 'our-senior-team';
        $title='Our Senior Team';
        return view('our-senior-team', compact(['bodyClass','title']));
    }
    public function overview()
    {
        $bodyClass = 'overview';
        $title='Overview';
        return view('overview', compact(['bodyClass','title']));
    }
    public function cannabinoids()
    {
        $bodyClass = 'cannabinoids';
        $title='Cannabinoids';
        return view('cannabinoids', compact(['bodyClass','title']));
    }
    public function tetrahydrocannabinol()
    {
        $bodyClass = 'tetrahydrocannabinol';
        $title='Tetrahydrocannabinol';
        return view('tetrahydrocannabinol', compact(['bodyClass','title']));
    }
    public function overview2()
    {
        $bodyClass = 'overview2';
        $title='Overview2';
        return view('overview2', compact(['bodyClass','title']));
    }
    public function immunology()
    {
        $bodyClass = 'immunology';
        $title='Immunology';
        return view('immunology', compact(['bodyClass','title']));
    }
    public function oncology()
    {
        $bodyClass = 'oncology';
        $title='Oncology';
        return view('oncology', compact(['bodyClass','title']));
    }
    public function neuroscience()
    {
        $bodyClass = 'neuroscience';
        $title='Neuroscience';
        return view('neuroscience', compact(['bodyClass','title']));
    }
    public function virology()
    {
        $bodyClass = 'virology';
        $title='Virology';
        return view('virology', compact(['bodyClass','title']));
    }
    public function generalMedicine()
    {
        $bodyClass = 'general-medicine';
        $title='General Medicine';
        return view('general-medicine', compact(['bodyClass','title']));
    }
    public function pressReleases()
    {
        $bodyClass = 'press-releases';
        $title='Press Releases';
        return view('press-releases', compact(['bodyClass','title']));
    }
    public function investorRelation()
    {
        $bodyClass = 'investor-relation';
        $title='Investor Relation';
        return view('investor-relation', compact(['bodyClass','title']));
    }
    public function contactUs()
    {
        $bodyClass = 'contact-us';
        $title='Contact Us';
        return view('contact-us', compact(['bodyClass','title']));
    }
    public function pr20181214()
    {
        $bodyClass = 'pr-20181214';
        $title='pr-20181214';
        return view('pr-20181214', compact(['bodyClass','title']));
    }
    public function pr20181203()
    {
        $bodyClass = 'pr-20181203';
        $title='pr-20181203';
        return view('pr-20181203', compact(['bodyClass','title']));
    }
    public function pr20181201()
    {
        $bodyClass = 'pr-20181201';
        $title='pr-20181201';
        return view('pr-20181201', compact(['bodyClass','title']));
    }
    public function pr20181128()
    {
        $bodyClass = 'pr-20181128';
        $title='pr-20181128';
        return view('pr-20181128', compact(['bodyClass','title']));
    }
    public function pr201811262()
    {
        $bodyClass = 'pr-20181126-2';
        $title='pr-20181126-2';
        return view('pr-20181126-2', compact(['bodyClass','title']));
    }
    public function pr20181126()
    {
        $bodyClass = 'pr-20181126';
        $title='pr-20181126';
        return view('pr-20181126', compact(['bodyClass','title']));
    }
    public function pr20181123()
    {
        $bodyClass = 'pr-20181123';
        $title='pr-20181123';
        return view('pr-20181123', compact(['bodyClass','title']));
    }
    public function pr20181122()
    {
        $bodyClass = 'pr-20181122';
        $title='pr-20181122';
        return view('pr-20181122', compact(['bodyClass','title']));
    }
    public function pr201898()
    {
        $bodyClass = 'pr-20181122';
        $title='pr-201898';
        return view('pr-201898', compact(['bodyClass','title']));
    }
    public function pr2019107()
    {
        $bodyClass = 'pr-20181122';
        $title='pr-2019107';
        return view('pr-2019107', compact(['bodyClass','title']));
    }
    public function pr20181012()
    {
        $bodyClass = 'pr-20181122';
        $title='pr-20181012';
        return view('pr-20181012', compact(['bodyClass','title']));
    }
}
