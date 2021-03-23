<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>


<div class="d-grid g-3
    l:d:cols-4
    l:t:cols-4">

    <div class="
        l:d:col-start-4
        l:t:col-start-4">
        <div class="d-grid g-3 position-sticky top-0">
            <div class="text-info">
                <i class="fas fa-anchor"></i> Fast to goal:
            </div>
            <div class="d-flex flex-wrap g-3
                l:d:d-grid
                l:t:d-grid">
                <a href="buttons#default">Default</a>
                <a href="buttons#inverse">Inverse</a>
                <a href="buttons#transparent">Transparent</a>
                <a href="buttons#primary">Primary</a>
                <a href="buttons#secondary">Secondary</a>
                <a href="buttons#info">Info</a>
                <a href="buttons#success">Success</a>
                <a href="buttons#warning">Warning</a>
                <a href="buttons#error">Error</a>
                <a href="buttons#sizes">Sizes</a>
                <a href="buttons#icon">Icon</a>
            </div>
        </div>
    </div>
    <div class="overflow-auto
        l:d:col-start-1 l:d:col-span-3 l:d:row-start-1
        l:t:col-start-1 l:t:col-span-3 l:t:row-start-1">

        <div id="default" class="">
            <div class="h2" role="heading" aria-level="2">Default</div>
            <p>To create a default button, use the <b>.tf_btn</b> class, but default state is not recommended to use without color classes for any buttons.</p>
            <div>
                <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                    <div class="d-inline-flex g-3 flex-wrap">
                        <button class="tf_btn">default button</button>
                        <button class="tf_btn"><i class="fas fa-home"></i> icon button</button>
                        <button class="tf_btn" disabled>disabled button</button>
                    </div>
                </div>
                <Highlight
                    class="rounded-2 rounded-top-0 mt-0"
                    language='{xml}'
                    code='
    // inverse color button
    <button class="tf_btn">default button</button>

    // inverse color button with icon
    <button class="tf_btn">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // inverse color disabled button
    <button class="tf_btn" disabled>disabled button</button>
                    '
                />
            </div>
        </div>
    
        <div id="inverse" class="overflow-auto">
            <div class="h2" role="heading" aria-level="2">Inverse</div>
            <p>Inverted color buttons are transparent like buttons by default.</p>
            <div>
                <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                    <div class="d-inline-flex g-3 flex-wrap">
                        <button class="tf_btn tf_btn-inverse">inverse button</button>
                        <button class="tf_btn tf_btn-inverse"><i class="fas fa-home"></i> icon button</button>
                        <button class="tf_btn tf_btn-inverse" disabled>disabled button</button>
                    </div>
                </div>
                <Highlight class="rounded-2 rounded-top-0 mt-0"
                    language='{xml}'
                    code='
    // inverse color button
    <button class="tf_btn tf_btn-inverse">inverse button</button>
            
    // inverse color button with icon
    <button class="tf_btn tf_btn-inverse">
        <i class="fas fa-home"></i>
        icon button
    </button>
    
    // inverse color disabled button
    <button class="tf_btn tf_btn-inverse" disabled>disabled button</button>
                    '
                />
            </div>
        </div>
    
        <div id="transparent" class="overflow-auto">
            <div class="h2" role="heading" aria-level="2">Transparent</div>
            <p>Inverted color buttons are transparent like buttons by default.</p>
            <div>
                <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                    <div class="d-inline-flex g-3 flex-wrap">
                        <button class="tf_btn tf_btn-transparent">transparent button</button>
                        <button class="tf_btn tf_btn-transparent"><i class="fas fa-home"></i> icon button</button>
                        <button class="tf_btn tf_btn-transparent" disabled>disabled button</button>
                    </div>
                </div>
                <Highlight
                    class="rounded-2 rounded-top-0 mt-0"
                    language='{xml}'
                    code='
        // transparent button
        <button class="tf_btn tf_btn-transparent">transparent button</button>
    
        // transparent button with icon
        <button class="tf_btn tf_btn-transparent">
            <i class="fas fa-home"></i>
            icon button
        </button>
    
        // transparent disabled button
        <button class="tf_btn tf_btn-transparent" disabled>disabled button</button>
                    '
                />
            </div>
        </div>
    
        <div>
            The following classes defining button colors:
            <ul>
                <li class="text-primary">
                    .tf_btn-primary
                </li>
                <li class="text-secondary">
                    .tf_btn-secondary
                </li>
                <li class="text-info">
                    .tf_btn-info
                </li>
                <li class="text-success">
                    .tf_btn-success
                </li>
                <li class="text-warning">
                    .tf_btn-warning
                </li>
                <li class="text-error">
                    .tf_btn-error
                </li>
            </ul>
        </div>
    
        <div>
            <div class="h2" role="heading" aria-level="2">Main color buttons</div>
        </div>
    
        <div id="primary" class="overflow-auto">
            <div class="h2" role="heading" aria-level="2">Primary</div>
            <p>One of the main colors button is primary.</p>
            <div>
                <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                    <div class="d-inline-flex g-3 flex-wrap">
                        <button class="tf_btn tf_btn-primary">primary button</button>
                        <button class="tf_btn tf_btn-primary"><i class="fas fa-home"></i> icon button</button>
                        <button class="tf_btn tf_btn-primary" disabled>disabled button</button>
                    </div>
                </div>
                <Highlight class="rounded-2 rounded-top-0 mt-0"
                    language='{xml}'
                    code='
    // primary color button
    <button class="tf_btn tf_btn-primary">primary button</button>

    // primary color button with icon
    <button class="tf_btn tf_btn-primary">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // primary color disabled button
    <button class="tf_btn tf_btn-primary" disabled>disabled button</button>
                    '
                />
            </div>
        </div>
    
        <div id="secondary" class="overflow-auto">
            <div class="h2" role="heading" aria-level="2">Secondary</div>
            <p>Next of the main colors button is secondary.</p>
            <div>
                <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                    <div class="d-inline-flex g-3 flex-wrap">
                        <button class="tf_btn tf_btn-secondary">secondary button</button>
                        <button class="tf_btn tf_btn-secondary"><i class="fas fa-home"></i> icon button</button>
                        <button class="tf_btn tf_btn-secondary" disabled>disabled button</button>
                    </div>
                </div>
                <Highlight
                    class="rounded-2 rounded-top-0 mt-0"
                    language='{xml}'
                    code='
    // secondary color button
    <button class="tf_btn tf_btn-secondary">secondary button</button>

    // secondary color button with icon
    <button class="tf_btn tf_btn-secondary">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // secondary color disabled button
    <button class="tf_btn tf_btn-secondary" disabled>disabled button</button>
                    '
                />
            </div>
        </div>
    
        <div>
            <div class="h2" role="heading" aria-level="2">Addition color buttons</div>
            <p>The following classes defining action button colors:</p>
        </div>
        
        <div id="info" class="overflow-auto">
            <div class="h3" role="heading" aria-level="3">Info</div>
            <div>
                <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                    <div class="d-inline-flex g-3 flex-wrap">
                        <button class="tf_btn tf_btn-info">info button</button>
                        <button class="tf_btn tf_btn-info"><i class="fas fa-home"></i> icon button</button>
                        <button class="tf_btn tf_btn-info" disabled>disabled button</button>
                    </div>
                </div>
                <Highlight
                    class="rounded-2 rounded-top-0 mt-0"
                    language='{xml}'
                    code='
    // info color button
    <button class="tf_btn tf_btn-info">info button</button>

    // info color button with icon
    <button class="tf_btn tf_btn-info">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // info color disabled button
    <button class="tf_btn tf_btn-info" disabled>disabled button</button>
                    '
                />
            </div>
        </div>
    
        <div id="success" class="overflow-auto">
            <div class="h3" role="heading" aria-level="3">Success</div>
            <div>
                <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                    <div class="d-inline-flex g-3 flex-wrap">
                        <button class="tf_btn tf_btn-success">success button</button>
                        <button class="tf_btn tf_btn-success"><i class="fas fa-home"></i> icon button</button>
                        <button class="tf_btn tf_btn-success" disabled>disabled button</button>
                    </div>
                </div>
                <Highlight
                    class="rounded-2 rounded-top-0 mt-0"
                    language='{xml}'
                    code='
    // success color button
    <button class="tf_btn tf_btn-success">info button</button>

    // success color button with icon
    <button class="tf_btn tf_btn-success">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // success color disabled button
    <button class="tf_btn tf_btn-success" disabled>disabled button</button>
                    '
                />
            </div>
        </div>
    
        <div id="warning" class="overflow-auto">
            <div class="h3" role="heading" aria-level="3">Warning</div>
            <div>
                <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                    <div class="d-inline-flex g-3 flex-wrap">
                        <button class="tf_btn tf_btn-warning">warning button</button>
                        <button class="tf_btn tf_btn-warning"><i class="fas fa-home"></i> icon button</button>
                        <button class="tf_btn tf_btn-warning" disabled>disabled button</button>
                    </div>
                </div>
                <Highlight class="rounded-2 rounded-top-0 mt-0"
                    language='{xml}'
                    code='
    // warning color button
    <button class="tf_btn tf_btn-warning">info button</button>

    // warning color button with icon
    <button class="tf_btn tf_btn-warning">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // warning color disabled button
    <button class="tf_btn tf_btn-warning" disabled>disabled button</button>
                    '
                />
            </div>
        </div>
    
        <div id="error" class="overflow-auto">
            <div class="h3" role="heading" aria-level="3">Error</div>
            <div>
                <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                    <div class="d-inline-flex g-3 flex-wrap">
                        <button class="tf_btn tf_btn-error">warning button</button>
                        <button class="tf_btn tf_btn-error"><i class="fas fa-home"></i> icon button</button>
                        <button class="tf_btn tf_btn-error" disabled>disabled button</button>
                    </div>
                </div>
                <Highlight
                    class="rounded-2 rounded-top-0 mt-0"
                    language='{xml}'
                    code='
    // error color button
    <button class="tf_btn tf_btn-error">info button</button>

    // error color button with icon
    <button class="tf_btn tf_btn-error">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // error color disabled button
    <button class="tf_btn tf_btn-error" disabled>disabled button</button>
                    '
                />
            </div>
        </div>
    
        <div id="sizes" class="overflow-auto">
            <div class="h2" role="heading" aria-level="2">Sizes</div>
            <p>For change size of buttons use <b>.tf_btn-sm</b> and <b>.tf_btn-lg</b> classes:</p>
            <div>
                <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                    <div class="d-inline-flex g-3 flex-wrap align-items-center">
                        <button class="tf_btn tf_btn-primary tf_btn-sm">small button</button>
                        <button class="tf_btn tf_btn-primary">default button</button>
                        <button class="tf_btn tf_btn-primary tf_btn-lg">large button</button>
                    </div>
                </div>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    // small size button
    <button class="tf_btn tf_btn-primary tf_btn-sm">small button</button>

    // normal size button
    <button class="tf_btn tf_btn-primary">default button</button>

    // large size button
    <button class="tf_btn tf_btn-primary tf_btn-lg">large button</button>
                '
            />
        </div>
    
        <div id="icon">
            <div class="h2" role="heading" aria-level="2">Icon</div>
            <p></p>
            <div>
                <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                    <div class="d-inline-flex g-3 flex-wrap align-items-center">
                        <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-sm"><i class="fas fa-info"></i></button>
                        <button class="tf_btn tf_btn-primary tf_btn-icon"><i class="fas fa-infinity"></i></button>
                        <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-lg"><i class="fas fa-brain"></i></button>
                    </div>
                </div>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    // icon small size button
    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-sm">
        <i class="fas fa-info"></i>
    </button>

    // icon normal size button
    <button class="tf_btn tf_btn-primary tf_btn-icon">
        <i class="fas fa-infinity"></i>
    </button>

    // icon large size button
    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-lg">
        <i class="fas fa-brain"></i>
    </button>
                '
            />
        </div>
    

    </div>

</div>



<div class="d-grid g-3 d-none">

    <div id="buttons">
        <div class="h1" role="heading" aria-level="1">Buttons</div>
        <div class="d-flex g-3">
            <div class="text-info"><i class="fas fa-anchor"></i> Fast to goal:</div>
            <div class="d-flex g-3 flex-wrap">
                <a href="buttons#default">Default</a>
                <a href="buttons#inverse">Inverse</a>
                <a href="buttons#transparent">Transparent</a>
                <a href="buttons#primary">Primary</a>
                <a href="buttons#secondary">Secondary</a>
                <a href="buttons#info">Info</a>
                <a href="buttons#success">Success</a>
                <a href="buttons#warning">Warning</a>
                <a href="buttons#error">Error</a>
                <a href="buttons#sizes">Sizes</a>
                <a href="buttons#icon">Icon</a>
            </div>
        </div>
    </div>

    <div id="default" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Default</div>
        <p>To create a default button, use the <b>.tf_btn</b> class, but default state is not recommended to use without color classes for any buttons.</p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-inline-flex g-3 flex-wrap">
                    <button class="tf_btn">default button</button>
                    <button class="tf_btn"><i class="fas fa-home"></i> icon button</button>
                    <button class="tf_btn" disabled>disabled button</button>
                </div>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    // inverse color button
    <button class="tf_btn">default button</button>

    // inverse color button with icon
    <button class="tf_btn">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // inverse color disabled button
    <button class="tf_btn" disabled>disabled button</button>
                '
            />
        </div>
    </div>

    <div id="inverse" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Inverse</div>
        <p>Inverted color buttons are transparent like buttons by default.</p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-inline-flex g-3 flex-wrap">
                    <button class="tf_btn tf_btn-inverse">inverse button</button>
                    <button class="tf_btn tf_btn-inverse"><i class="fas fa-home"></i> icon button</button>
                    <button class="tf_btn tf_btn-inverse" disabled>disabled button</button>
                </div>
            </div>
            <Highlight class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    // inverse color button
    <button class="tf_btn tf_btn-inverse">inverse button</button>
            
    // inverse color button with icon
    <button class="tf_btn tf_btn-inverse">
        <i class="fas fa-home"></i>
        icon button
    </button>
    
    // inverse color disabled button
    <button class="tf_btn tf_btn-inverse" disabled>disabled button</button>
                '
            />
        </div>
    </div>

    <div id="transparent" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Transparent</div>
        <p>Inverted color buttons are transparent like buttons by default.</p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-inline-flex g-3 flex-wrap">
                    <button class="tf_btn tf_btn-transparent">transparent button</button>
                    <button class="tf_btn tf_btn-transparent"><i class="fas fa-home"></i> icon button</button>
                    <button class="tf_btn tf_btn-transparent" disabled>disabled button</button>
                </div>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    // transparent button
    <button class="tf_btn tf_btn-transparent">transparent button</button>

    // transparent button with icon
    <button class="tf_btn tf_btn-transparent">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // transparent disabled button
    <button class="tf_btn tf_btn-transparent" disabled>disabled button</button>
                '
            />
        </div>
    </div>

    <div>
        The following classes defining button colors:
        <ul>
            <li class="text-primary">
                .tf_btn-primary
            </li>
            <li class="text-secondary">
                .tf_btn-secondary
            </li>
            <li class="text-info">
                .tf_btn-info
            </li>
            <li class="text-success">
                .tf_btn-success
            </li>
            <li class="text-warning">
                .tf_btn-warning
            </li>
            <li class="text-error">
                .tf_btn-error
            </li>
        </ul>
    </div>

    <div>
        <div class="h2" role="heading" aria-level="2">Main color buttons</div>
    </div>

    <div id="primary" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Primary</div>
        <p>One of the main colors button is primary.</p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-inline-flex g-3 flex-wrap">
                    <button class="tf_btn tf_btn-primary">primary button</button>
                    <button class="tf_btn tf_btn-primary"><i class="fas fa-home"></i> icon button</button>
                    <button class="tf_btn tf_btn-primary" disabled>disabled button</button>
                </div>
            </div>
            <Highlight class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    // primary color button
    <button class="tf_btn tf_btn-primary">primary button</button>

    // primary color button with icon
    <button class="tf_btn tf_btn-primary">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // primary color disabled button
    <button class="tf_btn tf_btn-primary" disabled>disabled button</button>
                '
            />
        </div>
    </div>

    <div id="secondary" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Secondary</div>
        <p>Next of the main colors button is secondary.</p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-inline-flex g-3 flex-wrap">
                    <button class="tf_btn tf_btn-secondary">secondary button</button>
                    <button class="tf_btn tf_btn-secondary"><i class="fas fa-home"></i> icon button</button>
                    <button class="tf_btn tf_btn-secondary" disabled>disabled button</button>
                </div>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    // secondary color button
    <button class="tf_btn tf_btn-secondary">secondary button</button>

    // secondary color button with icon
    <button class="tf_btn tf_btn-secondary">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // secondary color disabled button
    <button class="tf_btn tf_btn-secondary" disabled>disabled button</button>
                '
            />
        </div>
    </div>

    <div>
        <div class="h2" role="heading" aria-level="2">Addition color buttons</div>
        <p>The following classes defining action button colors:</p>
    </div>
    
    <div id="info" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Info</div>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-inline-flex g-3 flex-wrap">
                    <button class="tf_btn tf_btn-info">info button</button>
                    <button class="tf_btn tf_btn-info"><i class="fas fa-home"></i> icon button</button>
                    <button class="tf_btn tf_btn-info" disabled>disabled button</button>
                </div>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    // info color button
    <button class="tf_btn tf_btn-info">info button</button>

    // info color button with icon
    <button class="tf_btn tf_btn-info">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // info color disabled button
    <button class="tf_btn tf_btn-info" disabled>disabled button</button>
                '
            />
        </div>
    </div>

    <div id="success" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Success</div>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-inline-flex g-3 flex-wrap">
                    <button class="tf_btn tf_btn-success">success button</button>
                    <button class="tf_btn tf_btn-success"><i class="fas fa-home"></i> icon button</button>
                    <button class="tf_btn tf_btn-success" disabled>disabled button</button>
                </div>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    // success color button
    <button class="tf_btn tf_btn-success">info button</button>

    // success color button with icon
    <button class="tf_btn tf_btn-success">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // success color disabled button
    <button class="tf_btn tf_btn-success" disabled>disabled button</button>
                '
            />
        </div>
    </div>

    <div id="warning" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Warning</div>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-inline-flex g-3 flex-wrap">
                    <button class="tf_btn tf_btn-warning">warning button</button>
                    <button class="tf_btn tf_btn-warning"><i class="fas fa-home"></i> icon button</button>
                    <button class="tf_btn tf_btn-warning" disabled>disabled button</button>
                </div>
            </div>
            <Highlight class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    // warning color button
    <button class="tf_btn tf_btn-warning">info button</button>

    // warning color button with icon
    <button class="tf_btn tf_btn-warning">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // warning color disabled button
    <button class="tf_btn tf_btn-warning" disabled>disabled button</button>
                '
            />
        </div>
    </div>

    <div id="error" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Error</div>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-inline-flex g-3 flex-wrap">
                    <button class="tf_btn tf_btn-error">warning button</button>
                    <button class="tf_btn tf_btn-error"><i class="fas fa-home"></i> icon button</button>
                    <button class="tf_btn tf_btn-error" disabled>disabled button</button>
                </div>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    // error color button
    <button class="tf_btn tf_btn-error">info button</button>

    // error color button with icon
    <button class="tf_btn tf_btn-error">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // error color disabled button
    <button class="tf_btn tf_btn-error" disabled>disabled button</button>
                '
            />
        </div>
    </div>

    <div id="sizes" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Sizes</div>
        <p>For change size of buttons use <b>.tf_btn-sm</b> and <b>.tf_btn-lg</b> classes:</p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-inline-flex g-3 flex-wrap align-items-center">
                    <button class="tf_btn tf_btn-primary tf_btn-sm">small button</button>
                    <button class="tf_btn tf_btn-primary">default button</button>
                    <button class="tf_btn tf_btn-primary tf_btn-lg">large button</button>
                </div>
            </div>
        </div>
        <Highlight
            class="rounded-2 rounded-top-0 mt-0"
            language='{xml}'
            code='
    // small size button
    <button class="tf_btn tf_btn-primary tf_btn-sm">small button</button>

    // normal size button
    <button class="tf_btn tf_btn-primary">default button</button>

    // large size button
    <button class="tf_btn tf_btn-primary tf_btn-lg">large button</button>
            '
        />
    </div>

    <div id="icon" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Icon</div>
        <p></p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-inline-flex g-3 flex-wrap align-items-center">
                    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-sm"><i class="fas fa-info"></i></button>
                    <button class="tf_btn tf_btn-primary tf_btn-icon"><i class="fas fa-infinity"></i></button>
                    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-lg"><i class="fas fa-brain"></i></button>
                </div>
            </div>
        </div>
        <Highlight
            class="rounded-2 rounded-top-0 mt-0"
            language='{xml}'
            code='
    // icon small size button
    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-sm">
        <i class="fas fa-info"></i>
    </button>

    // icon normal size button
    <button class="tf_btn tf_btn-primary tf_btn-icon">
        <i class="fas fa-infinity"></i>
    </button>

    // icon large size button
    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-lg">
        <i class="fas fa-brain"></i>
    </button>
            '
        />
    </div>

</div>