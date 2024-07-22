import { nanoid } from "nanoid"; 
import card_back from "../../public/card_back.jpg"; 
import kyo_fighter from "../../public/kyo_fighter.jpg"; 
import ryo_fighter from "../../public/ryo_fighter.jpg"; 
import mai_fighter from "../../public/mai_fighter.jpg";
import andy_fighter from "../../public/andy_fighter.jpg"; 
import elizabeth_fighter from "../../public/elisabeth_fighter.jpg"; 
import kim_fighter from "../../public/kim_fighter.jpg"; 
import king_fighter from "../../public/king_fighter.jpg"; 
import shenwu_fighter from "../../public/shenwu_fighter.jpg"; 
import terry_fighter from "../../public/terry_fighter.jpg"; 
import duolon_fighter from "../../public/duolon_fighter.jpg"; 
import goro_fighter from "../../public/goro_fighter.jpg"; 
import leona_fighter from "../../public/leona_fighter.jpg"; 
import background_source from "../../public/main_background.gif"; 
import flip_source from "../../src/sounds/flip.mp3"; 
import help_popup_source from "../../public/help_popup_art.png"; 
import help_popup_sound_source from "../../src/sounds/help_popup.mp3"; 
import main_theme_source from "../../src/sounds/main_theme.mp3"; 
import win_background_source from "../../public/win_background.png"; 
import lose_background_source from "../../public/lose_background.png"; 
import background_video_source from "../../public/video_background.mp4"; 
import easy_difficulty_source from "../../public/easy_difficulty.png"; 
import medium_difficulty_source from "../../public/medium_difficulty.png"; 
import hard_difficulty_source from "../../public/hard_difficulty.png"; 

export const flip_sound = flip_source; 
export const help_popup_sound = help_popup_sound_source;  
export const help_popup_art = help_popup_source; 
export const main_theme = main_theme_source; 
export const background = background_source; 
export const win_background = win_background_source; 
export const lose_background = lose_background_source; 
export const background_video = background_video_source; 
export const easy_difficulty = easy_difficulty_source; 
export const medium_difficulty = medium_difficulty_source; 
export const hard_difficulty = hard_difficulty_source; 

export const initialCards = [
    {
        id: nanoid(8), 
        characterImage_front: kyo_fighter, 
        characterImage_back: card_back
    }, 

    {
        id: nanoid(8), 
        characterImage_front: ryo_fighter, 
        characterImage_back: card_back
    }, 

    {
        id: nanoid(8), 
        characterImage_front: mai_fighter, 
        characterImage_back: card_back
    }, 

    {
        id: nanoid(8), 
        characterImage_front: andy_fighter,
        characterImage_back: card_back
    }, 

    {
        id: nanoid(8), 
        characterImage_front: elizabeth_fighter, 
        characterImage_back: card_back
    }, 

    {
        id: nanoid(8), 
        characterImage_front: kim_fighter, 
        characterImage_back: card_back
    }, 

    {
        id: nanoid(8), 
        characterImage_front: king_fighter, 
        characterImage_back: card_back
    }, 

    {
        id: nanoid(8), 
        characterImage_front: shenwu_fighter, 
        characterImage_back: card_back
    }, 

    {
        id: nanoid(8), 
        characterImage_front: terry_fighter,
        characterImage_back: card_back
    }, 
    
    {
        id: nanoid(8), 
        characterImage_front: duolon_fighter, 
        characterImage_back: card_back
    }, 

    {
        id: nanoid(8), 
        characterImage_front: goro_fighter, 
        characterImage_back: card_back
    }, 

    {
        id: nanoid(8), 
        characterImage_front: leona_fighter, 
        characterImage_back: card_back
    }
]
