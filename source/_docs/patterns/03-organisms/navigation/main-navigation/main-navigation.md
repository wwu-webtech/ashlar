import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

# Main Navigation
Utilizes Ultimenu for generating the markup and region management in Drupal, and Adobe Megamenu for the interactions/accessibility. The megamenu script cannot currently be loaded in the documentaion, so this is a preview for styles only. Any change to menu functionality needs to be tested in a Drupal instance.

<nav className="main-navigation" aria-label="Main">
  <ul className="ultimenu ultimenu--horizontal ultimenu--htb ultimenu--basic">
    <li className="ultimenu__item has-ultimenu">
      <span className="material-icons expand-icon mobile" aria-hidden="true">keyboard_arrow_right</span>
      <span className="material-icons expand-icon desktop" aria-hidden="true">keyboard_arrow_down</span>      
      <a href="#" className="ultimenu__link">Menu Item 1</a>
      
      <section className="ultimenu__flyout">
        
        <div className="ultimenu__region">
          <div className="ultimenusub">
            <ul className="menu">              
              <li className="menu-item">
                <a href="">Menu item 1</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item 2</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item three</a>
              </li>
              <li className="menu-item--active-page menu-item">
                <a href="">Menu item 4</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item 5</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item six</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item 7</a>
              </li>              
            </ul>            
          </div>          
        </div>   
      </section>
    </li>
    <li className="ultimenu__item has-ultimenu">
      <span className="material-icons expand-icon mobile" aria-hidden="true">keyboard_arrow_right</span>
      <span className="material-icons expand-icon desktop" aria-hidden="true">keyboard_arrow_down</span>
      <a href="#" className="ultimenu__link">Menu Item 2</a>
      <section className="ultimenu__flyout">        
        <div className="ultimenu__region">
          <div className="ultimenusub">
            <ul className="menu">              
              <li className="menu-item">
                <a href="">Menu item 1</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item 2</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item three</a>
              </li>
              <li className="menu-item--active-page menu-item">
                <a href="">Menu item 4</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item 5</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item six</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item 7</a>
              </li>              
            </ul>            
          </div>
          
          <div className="block--menu">
            <h2 className="title">Second Menu</h2>
            <ul className="menu">
              <li>
                <a href="">
                  Secondary Menu Item 1
                </a>
              </li>
              <li>
                <a href="">
                  Secondary Menu Item 2
                </a>
              </li>
              <li>
                <a href="">
                  Secondary Menu Item 3
                </a>
              </li>
              <li>
                <a href="">
                  Secondary Menu Item 4
                </a>
              </li>
            </ul>
          </div>
        </div>       
      </section>
    </li>
    
    <li className="ultimenu__item has-ultimenu">
      <span className="material-icons expand-icon mobile" aria-hidden="true">keyboard_arrow_right</span>
      <span className="material-icons expand-icon desktop" aria-hidden="true">keyboard_arrow_down</span>
      <a href="#" className="ultimenu__link">Menu Item 3</a>
      <section className="ultimenu__flyout">
        
        <div className="ultimenu__region">
          <div className="ultimenusub">
            <ul className="menu">
              
              <li className="menu-item">
                <a href="">Menu item 1</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item 2</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item three</a>
              </li>
              <li className="menu-item--active-page menu-item">
                <a href="">Menu item 4</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item 5</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item six</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item 7</a>
              </li>              
            </ul>            
          </div>
          
          <div className="block--menu">
            <h2 className="title">Second Menu</h2>
            <ul className="menu">
              <li>
                <a href="">
                  Secondary Menu Item 1
                </a>
              </li>
              <li>
                <a href="">
                  Secondary Menu Item 2
                </a>
              </li>
              <li>
                <a href="">
                  Secondary Menu Item 3
                </a>
              </li>
              <li>
                <a href="">
                  Secondary Menu Item 4
                </a>
              </li>
            </ul>
          </div>
          
          <div className="block--menu">
            <h2 className="title">Third Menu</h2>
            <ul className="menu">
              <li>
                <a href="">
                  Tertiary Menu Item 1
                </a>
              </li>
              <li>
                <a href="">
                  Tertiary Menu Item 2
                </a>
              </li>
              <li>
                <a href="">
                  Tertiary Menu Item 3
                </a>
              </li>
              <li>
                <a href="">
                  Tertiary Menu Item 4
                </a>
              </li>
            </ul>
          </div>
        </div>        
        
      </section>
    </li>
    <li className="ultimenu__item has-ultimenu">
      <span className="material-icons expand-icon mobile" aria-hidden="true">keyboard_arrow_right</span>
      <span className="material-icons expand-icon desktop" aria-hidden="true">keyboard_arrow_down</span>
      <a href="#" className="ultimenu__link">Menu Item Four</a>
      <section className="ultimenu__flyout">
        
        <div className="ultimenu__region">
          <div className="ultimenusub">
            <ul className="menu">
              
              <li className="menu-item">
                <a href="">Menu item 1</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item 2</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item three</a>
              </li>
              <li className="menu-item--active-page menu-item">
                <a href="">Menu item 4</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item 5</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item six</a>
              </li>
              <li className="menu-item">
                <a href="">Menu item 7</a>
              </li>              
            </ul>            
          </div>
          
          <div className="block--menu">
            <h2 className="title">Second Menu</h2>
            <ul className="menu">
              <li>
                <a href="">
                  Secondary Menu Item 1
                </a>
              </li>
              <li>
                <a href="">
                  Secondary Menu Item 2
                </a>
              </li>
              <li>
                <a href="">
                  Secondary Menu Item 3
                </a>
              </li>
              <li>
                <a href="">
                  Secondary Menu Item 4
                </a>
              </li>
            </ul>
          </div>
          
          <div className="block--menu">
            <h2 className="title">Third Menu</h2>
            <ul className="menu">
              <li>
                <a href="">
                  Tertiary Menu Item 1
                </a>
              </li>
              <li>
                <a href="">
                  Tertiary Menu Item 2
                </a>
              </li>
              <li>
                <a href="">
                  Tertiary Menu Item 3
                </a>
              </li>
              <li>
                <a href="">
                  Tertiary Menu Item 4
                </a>
              </li>
            </ul>
          </div>
          
          <div className="block--menu">
            <h2 className="title">Fourth Menu</h2>
            <ul className="menu">
              <li>
                <a href="">
                  Quaternary Menu Item 1
                </a>
              </li>
              <li>
                <a href="">
                  Quaternary Menu Item 2
                </a>
              </li>
              <li>
                <a href="">
                  Quaternary Menu Item 3
                </a>
              </li>
              <li>
                <a href="">
                  Quaternary Menu Item 4
                </a>
              </li>
            </ul>
          </div>
          
          <div className="block--menu">
            <h2 className="title">Fifth Menu</h2>
            <ul className="menu">
              <li>
                <a href="">
                  Quinary Menu Item 1
                </a>
              </li>
              <li>
                <a href="">
                  Quinary Menu Item 2
                </a>
              </li>
              <li>
                <a href="">
                  Quinary Menu Item 3
                </a>
              </li>
              <li>
                <a href="">
                  Quinary Menu Item 4
                </a>
              </li>
            </ul>
          </div>
          
          <div className="block--menu">
            <h2 className="title">Sixth Menu</h2>
            <ul className="menu">
              <li>
                <a href="">
                  Senary Menu Item 1
                </a>
              </li>
              <li>
                <a href="">
                  Senary Menu Item 2
                </a>
              </li>
              <li>
                <a href="">
                  Senary Menu Item 3
                </a>
              </li>
              <li>
                <a href="">
                  Senary Menu Item 4
                </a>
              </li>
            </ul>
          </div>
        </div> 
      </section>
    </li>
    <li className="ultimenu__item"><a href="#" className="ultimenu__link">Menu Item Five</a>
    </li><li className="ultimenu__item"><a href="#" className="ultimenu__link">Menu Item Six</a>
    </li><li className="ultimenu__item"><a href="#" className="ultimenu__link">Menu Item Seven</a>
    </li><li className="ultimenu__item"><a href="#" className="ultimenu__link">Menu Item Eight</a>
    </li><li className="ultimenu__item"><a href="#" className="ultimenu__link">Menu Item Nine Is Extra Long</a>
    </li>
  </ul>
</nav>

<section className="ultimenu__flyout">
   
   <div className="ultimenu__region">
      <div className="ultimenusub">
      <ul className="menu">
         
         <li className="menu-item">
            <a href="">Menu item 1</a>
         </li>
         <li className="menu-item">
            <a href="">Menu item 2</a>
         </li>
         <li className="menu-item">
            <a href="">Menu item three</a>
         </li>
         <li className="menu-item--active-page menu-item">
            <a href="">Menu item 4</a>
         </li>
         <li className="menu-item">
            <a href="">Menu item 5</a>
         </li>
         <li className="menu-item">
            <a href="">Menu item six</a>
         </li>
         <li className="menu-item">
            <a href="">Menu item 7</a>
         </li>              
      </ul>            
      </div>
      
      <div className="block--menu">
      <h2 className="title">Second Menu</h2>
      <ul className="menu">
         <li>
            <a href="">
            Secondary Menu Item 1
            </a>
         </li>
         <li>
            <a href="">
            Secondary Menu Item 2
            </a>
         </li>
         <li>
            <a href="">
            Secondary Menu Item 3
            </a>
         </li>
         <li>
            <a href="">
            Secondary Menu Item 4
            </a>
         </li>
      </ul>
      </div>
      
      <div className="block--menu">
      <h2 className="title">Third Menu</h2>
      <ul className="menu">
         <li>
            <a href="">
            Tertiary Menu Item 1
            </a>
         </li>
         <li>
            <a href="">
            Tertiary Menu Item 2
            </a>
         </li>
         <li>
            <a href="">
            Tertiary Menu Item 3
            </a>
         </li>
         <li>
            <a href="">
            Tertiary Menu Item 4
            </a>
         </li>
      </ul>
      </div>
      
      <div className="block--menu">
      <h2 className="title">Fourth Menu</h2>
      <ul className="menu">
         <li>
            <a href="">
            Quaternary Menu Item 1
            </a>
         </li>
         <li>
            <a href="">
            Quaternary Menu Item 2
            </a>
         </li>
         <li>
            <a href="">
            Quaternary Menu Item 3
            </a>
         </li>
         <li>
            <a href="">
            Quaternary Menu Item 4
            </a>
         </li>
      </ul>
      </div>
      
      <div className="block--menu">
      <h2 className="title">Fifth Menu</h2>
      <ul className="menu">
         <li>
            <a href="">
            Quinary Menu Item 1
            </a>
         </li>
         <li>
            <a href="">
            Quinary Menu Item 2
            </a>
         </li>
         <li>
            <a href="">
            Quinary Menu Item 3
            </a>
         </li>
         <li>
            <a href="">
            Quinary Menu Item 4
            </a>
         </li>
      </ul>
      </div>
      
      <div className="block--menu">
      <h2 className="title">Sixth Menu</h2>
      <ul className="menu">
         <li>
            <a href="">
            Senary Menu Item 1
            </a>
         </li>
         <li>
            <a href="">
            Senary Menu Item 2
            </a>
         </li>
         <li>
            <a href="">
            Senary Menu Item 3
            </a>
         </li>
         <li>
            <a href="">
            Senary Menu Item 4
            </a>
         </li>
      </ul>
      </div>
   </div> 
</section>