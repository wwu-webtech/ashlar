# Forms

## Checkboxes
<form>
  <div className="checkbox">
    <input type="checkbox" id="checkbox-option1" name="checkbox" value="First"/>
    <label htmlFor="checkbox-option1">Option One</label>
  </div>
  <div className="checkbox">
    <input type="checkbox" id="checkbox-option2" name="checkbox" value="Second"/>
    <label htmlFor="checkbox-option2">Option Two</label>
  </div>
  <div className="checkbox">
    <input type="checkbox" id="checkbox-option3" name="checkbox" value="Third"/>
    <label htmlFor="checkbox-option3">Option Three</label>
  </div>
</form>

## Radio
<form>
  <div className="radio">
    <input type="radio" id="radio-option1" name="radio" value="First" /> 
    <label htmlFor="radio-option1">Option One</label>
  </div>
  <div className="radio">
    <input type="radio" id="radio-option2" name="radio" value="Second" /> 
    <label htmlFor="radio-option2">Option Two</label>
  </div>
  <div className="radio">
    <input type="radio" id="radio-option3" name="radio" value="Third" /> 
    <label htmlFor="radio-option3">Option Three</label>
  </div>
</form>

## Select List
<form>
<label htmlFor="list" >Select an Item</label>
    <select id="list">
    <option value="" defaultValue="selected">- Select -</option>
    <option value="Option One">Option One</option>
    <option value="Option Two">Option Two</option>
    <option value="Option Three">Option Three</option>
    <option value="Option Four">Option Four</option>
</select>
</form>

## Text Area
<form>
  <label htmlFor="text">Textarea label</label>
  <textarea id="text" rows="5"></textarea>
</form>

## Text Field
<form>
  <label className="required" htmlFor="input">Textfield label</label>
  <input id="input"/>
</form>

## Disabled Text Field
<form>
  <label htmlFor="input-disabled">Textfield label</label>
  <input id="input-disabled" disabled/>
</form>

## Submit
<input id="edit-submit" type="submit" value="Submit" />  